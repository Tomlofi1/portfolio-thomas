import { Card } from "@/components/ui/card";
import { Code2, Database, Layout } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-card/30" id="about">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] backdrop-blur-sm group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Backend</h3>
              <p className="text-muted-foreground">
                Desenvolvimento robusto com .NET, PHP e Laravel, criando APIs escaláveis e seguras
              </p>
            </div>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] backdrop-blur-sm group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Layout className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Frontend</h3>
              <p className="text-muted-foreground">
                Interfaces modernas e responsivas com React e JavaScript, focando em UX excepcional
              </p>
            </div>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] backdrop-blur-sm group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Database</h3>
              <p className="text-muted-foreground">
                Experiência com SQL, MySQL e PostgreSQL para modelagem e otimização de dados
              </p>
            </div>
          </Card>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desenvolvedor fullstack apaixonado por tecnologia e solução de problemas. Com sólida experiência 
            em desenvolvimento backend e frontend, busco sempre entregar soluções de alta qualidade que 
            agregam valor real aos negócios. Constantemente aprendendo e me adaptando às novas tecnologias 
            para criar aplicações modernas e eficientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
