import { Award, GraduationCap, Languages } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { certifications, education, languages } from "@/data/profile";

const Education = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 scroll-mt-16 border-t border-border/60" id="education">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="05" eyebrow="formação" title="Formação & certificações" />

        <div className="grid md:grid-cols-3 gap-5">
          <Reveal className="card-surface p-6">
            <GraduationCap className="h-5 w-5 text-primary mb-5" />
            <h3 className="font-display font-semibold text-lg mb-5">Formação acadêmica</h3>
            <ul className="space-y-5">
              {education.map((item) => (
                <li key={item.institution}>
                  <p className="font-mono text-xs text-primary mb-1">{item.period}</p>
                  <p className="font-medium">{item.institution}</p>
                  <p className="text-sm text-muted-foreground">{item.course}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="card-surface p-6" delay={80}>
            <Award className="h-5 w-5 text-accent mb-5" />
            <h3 className="font-display font-semibold text-lg mb-5">Cursos & certificações</h3>
            <ul className="space-y-5">
              {certifications.map((item) => (
                <li key={item.name}>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.issuer}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="card-surface p-6" delay={160}>
            <Languages className="h-5 w-5 text-primary mb-5" />
            <h3 className="font-display font-semibold text-lg mb-5">Idiomas</h3>
            <ul className="space-y-3">
              {languages.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-4">
                  <span>{item.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{item.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
