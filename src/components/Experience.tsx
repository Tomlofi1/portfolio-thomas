import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { experiences } from "@/data/profile";

const Experience = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 scroll-mt-16 border-t border-border/60" id="experience">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="02"
          eyebrow="experiência"
          title={
            <>
              Sistemas reais, <span className="gradient-text">em produção</span>
            </>
          }
          subtitle="Onde tenho construído e mantido serviços usados no dia a dia de outras pessoas."
        />

        <ol className="space-y-6">
          {experiences.map((exp, i) => (
            <Reveal
              as="li"
              key={exp.company}
              delay={i * 80}
              className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-10"
            >
              <div className="md:pt-7 flex md:flex-col items-center md:items-start gap-3">
                <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/30 px-2.5 py-0.5 font-mono text-[11px] text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    atual
                  </span>
                )}
              </div>

              <article
                className={`card-surface p-6 sm:p-8 ${exp.current ? "border-primary/30 bg-gradient-to-br from-primary/[0.06] to-card/70" : ""}`}
              >
                <header className="mb-5">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold">{exp.company}</h3>
                  <p className="text-sm sm:text-base text-primary/90 mt-1">{exp.role}</p>
                  {exp.summary && <p className="text-muted-foreground mt-4">{exp.summary}</p>}
                </header>

                <ul
                  className={`grid gap-x-8 gap-y-3 text-sm sm:text-[15px] text-muted-foreground mb-6 ${
                    exp.highlights.length > 4 ? "lg:grid-cols-2" : ""
                  }`}
                >
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="font-mono text-primary/70 select-none">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border/70">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
