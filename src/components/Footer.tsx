import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-primary/10 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Vamos Conversar?</h3>
            <p className="text-muted-foreground">
              Disponível para projetos freelance e oportunidades
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="mailto:tomamorimfalcao@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a 
              href="https://github.com/Tomlofi1" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/tomlofi/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-muted-foreground text-sm">
          <p>© 2025 - Desenvolvedor Fullstack. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
