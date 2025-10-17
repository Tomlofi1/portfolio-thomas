import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Biblioteca Virtual",
    description: "Aplicação backend para gestão de uma biblioteca com .NET e PostgreSQL",
    tech: [".NET", "PostgreSQL"],
    gradient: "from-blue-500/10 to-purple-500/10",
    repoUrl: "https://github.com/Tomlofi1/Biblioteca-Virtual",
    demoUrl: ""
  },
  {
    title: "Sistema web de Ponto Eletrônico",
    description: "Sistema web feito em Laravel para consultas do ponto eletrônico",
    tech: ["Laravel", "PHP", "MySQL"],
    gradient: "from-purple-500/10 to-pink-500/10",
    privateMessage: "código não disponível publicamente."
  },
  {
    title: "Portfólio Pessoal",
    description: "Meu portfólio pessoal desenvolvido com React e Tailwind CSS",
    tech: ["React", "JavaScript"],
    gradient: "from-cyan-500/10 to-blue-500/10",
    repoUrl: "",
    demoUrl: ""
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alguns projetos que desenvolvi utilizando diferentes tecnologias
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] backdrop-blur-sm group overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  {project.privateMessage ? (
                    <Button variant="outline" size="sm" className="border-primary/30" disabled>
                      <Github className="mr-2 h-4 w-4" />
                      {project.privateMessage}
                    </Button>
                  ) : (
                    <>
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 text-sm rounded-md border border-primary/30 hover:border-primary hover:bg-primary/10"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </a>
                      ) : (
                        <Button variant="outline" size="sm" className="border-primary/30" disabled>
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </Button>
                      )}

                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 text-sm rounded-md border border-primary/30 hover:border-primary hover:bg-primary/10"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      ) : (
                        <Button variant="outline" size="sm" className="border-primary/30" disabled>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
