import { ArrowUpRight, Building2, Check, Github, Lock, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { profile, projects, type Project } from "@/data/profile";

const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => {
  const wide = project.featured;

  return (
    <Reveal
      delay={delay}
      className={`card-surface group relative overflow-hidden p-6 sm:p-8 ${wide ? "md:col-span-2" : ""}`}
    >
      <div
        className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden
      />

      <div className={`relative ${wide ? "md:grid md:grid-cols-[1.1fr_1fr] md:gap-10" : ""}`}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-4 mb-5">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              {project.kind === "professional" ? (
                <>
                  <Building2 className="h-3.5 w-3.5 text-primary" /> Carajás Labs
                </>
              ) : (
                <>
                  <Sparkles className="h-3.5 w-3.5 text-accent" /> Projeto pessoal
                </>
              )}
            </span>
            {project.kind === "professional" && (
              <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground/80">
                <Lock className="h-3 w-3" /> código proprietário
              </span>
            )}
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tech.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>

          {(project.repoUrl || project.demoUrl) && (
            <div className="flex flex-wrap gap-4 mt-6">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" /> Código <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
                >
                  Demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
        </div>

        {project.highlights && (
          <ul className={`space-y-2.5 ${wide ? "mt-8 md:mt-0 self-center" : "mt-6"}`}>
            {project.highlights.map((item) => (
              <li
                key={item}
                className={`flex items-start gap-3 text-sm ${
                  wide ? "rounded-xl border border-border bg-background/50 p-3.5" : ""
                }`}
              >
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
};

const Group = ({ label, items }: { label: string; items: Project[] }) => (
  <div>
    <Reveal className="flex items-center gap-4 mb-6">
      <h3 className="font-mono text-sm text-muted-foreground whitespace-nowrap">{label}</h3>
      <div className="h-px flex-1 bg-border" />
    </Reveal>
    <div className="grid md:grid-cols-2 gap-5">
      {items.map((project, i) => (
        <ProjectCard key={project.title} project={project} delay={i * 80} />
      ))}
    </div>
  </div>
);

const Projects = () => {
  const professional = projects.filter((p) => p.kind === "professional");
  const personal = projects.filter((p) => p.kind === "personal");

  return (
    <section className="relative py-24 md:py-32 px-4 scroll-mt-16 border-t border-border/60" id="projects">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="03"
          eyebrow="projetos"
          title={
            <>
              O que eu <span className="gradient-text">construí</span>
            </>
          }
          subtitle="Entregas do trabalho na Carajás Labs (descritas em alto nível, já que o código é proprietário) e projetos pessoais."
        />

        <div className="space-y-14">
          <Group label="profissionais" items={professional} />
          <Group label="pessoais" items={personal} />
        </div>

        <Reveal className="mt-12">
          <a
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            ver todos os repositórios no github
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
