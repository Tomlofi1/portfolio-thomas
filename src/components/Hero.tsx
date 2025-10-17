import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-card">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <p className="text-primary text-lg font-medium">Olá, eu sou Thomas Edson.</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="gradient-text">Desenvolvedor</span>
                <br />
                <span className="text-foreground">Fullstack</span>
              </h1>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Especializado em criar soluções web completas e escaláveis, desde o backend até interfaces modernas e responsivas.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/tomlofi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 bg-primary hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] rounded-md text-white"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Entre em Contato
                </a>

                <a
                  href="https://github.com/Tomlofi1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 text-sm rounded-md border border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  Ver Projetos
                </a>
              </div>
            
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Tomlofi1" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/tomlofi/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src={profileImage} 
                alt="Profile" 
                className="relative rounded-full w-72 h-72 md:w-96 md:h-96 object-cover border-4 border-primary/20 shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
