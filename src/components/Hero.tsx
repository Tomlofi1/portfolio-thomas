import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import EventStream from "@/components/EventStream";
import { experiences, profile } from "@/data/profile";

const Hero = () => {
  const current = experiences.find((e) => e.current);

  return (
    <section id="top" className="relative min-h-screen flex items-center px-4 pt-28 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
        aria-hidden
      />
      <div
        className="absolute -top-48 left-1/2 -translate-x-1/2 h-[480px] w-[min(900px,100vw)] rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-16 items-center">
        <div className="space-y-8 min-w-0 animate-line-in">
          <div className="flex items-center gap-4">
            <img
              src={profileImage}
              alt={`Foto de ${profile.name}`}
              className="h-14 w-14 rounded-full object-cover object-[50%_45%] ring-2 ring-primary/40 ring-offset-4 ring-offset-background"
            />
            <div>
              <p className="font-display font-semibold text-lg leading-tight">{profile.name}</p>
              <p className="font-mono text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {profile.location}
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <p className="font-mono text-sm text-primary">// {profile.role.toLowerCase()}</p>
            <h1 className="font-display text-[2.4rem] leading-[1.05] sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight">
              Construo o back-end que faz os <span className="gradient-text">sistemas conversarem</span>.
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">{profile.tagline}</p>
          </div>

          {current && (
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/70 pl-3 pr-4 py-1.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-muted-foreground">
                Atualmente na <span className="text-foreground font-medium">{current.company}</span>
              </span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Fale comigo
            </a>
            <a
              href="#projects"
              className="group inline-flex justify-center items-center gap-2 px-5 py-3 rounded-lg border border-border hover:border-primary/50 hover:bg-card transition-colors"
            >
              Ver projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="flex items-center justify-center gap-1 sm:ml-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="min-w-0 animate-line-in [animation-delay:150ms]">
          <EventStream />
        </div>
      </div>
    </section>
  );
};

export default Hero;
