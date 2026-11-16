import { useEffect, useRef, useState } from "react";

// Log ilustrativo: representa o tipo de trabalho (webhooks, jobs, SSE), não dados reais.
type Kind = "POST" | "GET" | "JOB" | "SSE";
type Status = { label: string; tone: "ok" | "warn" | "info" };
type Event = { kind: Kind; target: string; detail?: string; status: Status };

const OK = (label: string): Status => ({ label, tone: "ok" });

const EVENTS: Event[] = [
  { kind: "POST", target: "/webhooks/suri", detail: "message.received", status: OK("200") },
  { kind: "POST", target: "/webhooks/suri", detail: "contact.updated", status: OK("200") },
  { kind: "JOB", target: "nps.validate-answer", status: OK("ok") },
  { kind: "GET", target: "/api/cep/57020-000", status: OK("200") },
  { kind: "POST", target: "/api/fornecedores", status: OK("201") },
  { kind: "SSE", target: "ticket.status", detail: "→ client", status: { label: "push", tone: "info" } },
  { kind: "POST", target: "/webhooks/suri", detail: "message.received", status: { label: "dedupe", tone: "warn" } },
  { kind: "POST", target: "/api/notas-fiscais", status: OK("202") },
  { kind: "JOB", target: "nps.close-flow", status: OK("ok") },
  { kind: "POST", target: "/webhooks/suri", detail: "attendance.closed", status: OK("200") },
];

const kindColor: Record<Kind, string> = {
  POST: "text-primary",
  GET: "text-sky-400",
  JOB: "text-accent",
  SSE: "text-fuchsia-400",
};

const toneColor: Record<Status["tone"], string> = {
  ok: "text-primary",
  warn: "text-accent",
  info: "text-sky-400",
};

type Line = Event & { id: number; time: string; ms: number };

const VISIBLE = 9;
const fmt = (d: Date) => d.toLocaleTimeString("pt-BR", { hour12: false });

const makeLine = (id: number, at: Date): Line => ({
  ...EVENTS[id % EVENTS.length],
  id,
  time: fmt(at),
  ms: 6 + ((id * 37) % 48),
});

const EventStream = () => {
  const [lines, setLines] = useState<Line[]>(() => {
    const now = Date.now();
    return Array.from({ length: VISIBLE - 2 }, (_, i) => makeLine(i, new Date(now - (VISIBLE - i) * 1400)));
  });
  const next = useRef(VISIBLE - 2);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      const line = makeLine(next.current++, new Date());
      setLines((prev) => [...prev, line].slice(-VISIBLE));
    }, 1600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-3xl" aria-hidden />
      <div
        className="relative rounded-2xl border border-border bg-[hsl(225_14%_7%)] shadow-2xl shadow-black/50 overflow-hidden"
        role="img"
        aria-label="Animação ilustrativa de um log de eventos: webhooks, jobs e SSE sendo processados"
      >
        <div className="flex items-center justify-between px-4 h-11 border-b border-border bg-secondary/40">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">integrations — events.log</span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            live
          </span>
        </div>

        <div className="h-[19rem] flex flex-col justify-end gap-1 px-3 sm:px-4 py-4 font-mono text-[11px] sm:text-xs" aria-hidden>
          {lines.map((line) => (
            <div key={line.id} className="flex items-center gap-2 sm:gap-3 animate-line-in motion-reduce:animate-none">
              <span className="hidden sm:inline text-muted-foreground/60 tabular-nums">{line.time}</span>
              <span className={`w-9 shrink-0 font-semibold ${kindColor[line.kind]}`}>{line.kind}</span>
              <span className="min-w-0 flex-1 truncate">
                <span className="text-foreground/90">{line.target}</span>
                {line.detail && <span className="text-muted-foreground"> {line.detail}</span>}
              </span>
              <span className={`shrink-0 ${toneColor[line.status.tone]}`}>{line.status.label}</span>
              <span className="w-10 shrink-0 text-right text-muted-foreground/60 tabular-nums">{line.ms}ms</span>
            </div>
          ))}
          <div className="flex items-center gap-2 pt-1 text-muted-foreground">
            <span className="text-primary">❯</span>
            <span>aguardando eventos</span>
            <span className="inline-block w-2 h-3.5 bg-primary/80 animate-blink motion-reduce:animate-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventStream;
