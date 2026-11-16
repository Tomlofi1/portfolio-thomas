import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { skillGroups } from "@/data/profile";

const Skills = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 scroll-mt-16 border-t border-border/60" id="skills">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="04"
          eyebrow="stack"
          title="Ferramentas do dia a dia"
          subtitle="O que uso para construir, integrar e manter serviços back-end."
        />

        <Reveal className="card-surface divide-y divide-border overflow-hidden">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="grid sm:grid-cols-[180px_1fr] gap-3 sm:gap-8 px-5 sm:px-8 py-5 hover:bg-secondary/30 transition-colors"
            >
              <h3 className="font-mono text-sm text-primary sm:pt-1">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-background/60 px-3 py-1.5 text-sm text-foreground/90 hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
