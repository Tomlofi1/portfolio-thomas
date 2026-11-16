import { Database, Server, Workflow } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { profile } from "@/data/profile";

const pillars = [
  {
    icon: Server,
    title: "APIs REST",
    text: "Validação com Zod, regras de negócio, tratamento de falhas e documentação com Swagger/OpenAPI.",
  },
  {
    icon: Workflow,
    title: "Integrações & eventos",
    text: "Webhooks, jobs e SSE conectando plataformas externas aos sistemas internos — sem duplicidades.",
  },
  {
    icon: Database,
    title: "Dados",
    text: "MySQL, Oracle, PostgreSQL e Redis — consultas SQL, modelagem e controle de concorrência.",
  },
];

const About = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 scroll-mt-16" id="about">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="01" eyebrow="sobre" title="Quem está por trás das integrações" />

        <div className="grid md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">
          <Reveal className="mx-auto md:mx-0 w-full max-w-[300px]">
            <div className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-primary/40" aria-hidden />
              <img
                src={profileImage}
                alt={`Foto de ${profile.name}`}
                className="relative aspect-[4/5] w-full rounded-2xl object-cover border border-border"
              />
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal className="space-y-5 max-w-2xl" delay={100}>
              {profile.summary.map((paragraph) => (
                <p key={paragraph} className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-4">
              {pillars.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={150 + i * 100} className="card-surface p-5">
                  <Icon className="h-5 w-5 text-primary mb-4" />
                  <h3 className="font-display font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
