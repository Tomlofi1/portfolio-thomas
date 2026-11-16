import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <footer className="relative px-4 pt-24 md:pt-32 pb-10 scroll-mt-16 border-t border-border/60 overflow-hidden" id="contact">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[360px] w-[min(900px,100vw)] rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-sm mb-4">
            <span className="text-primary">06</span>
            <span className="text-muted-foreground"> // contato</span>
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Tem uma integração para <span className="gradient-text">tirar do papel</span>?
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg max-w-xl">
            Estou aberto a oportunidades e conversas sobre desenvolvimento back-end. Respondo por email ou LinkedIn.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="font-display text-lg sm:text-2xl font-semibold text-foreground hover:text-primary transition-colors break-all"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "copiado!" : "copiar"}
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 hover:border-primary/50 hover:bg-card transition-colors"
            >
              <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-24 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between gap-2 font-mono text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>feito com React, TypeScript & Tailwind · {profile.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
