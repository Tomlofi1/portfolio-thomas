import { Card } from "@/components/ui/card";

const skills = [
  { name: ".NET", category: "Backend", icon: "🔷" },
  { name: "Entity Framework", category: "ORM", icon: "📊" },
  { name: "JavaScript", category: "Frontend", icon: "💛" },
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "SQL", category: "Database", icon: "🗄️" },
  { name: "MySQL", category: "Database", icon: "🐬" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "PHP", category: "Backend", icon: "🐘" },
  { name: "Laravel", category: "Framework", icon: "🔴" },
];

const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span> & Tecnologias
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experiência em desenvolvimento fullstack com diversas tecnologias modernas
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name}
              className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] backdrop-blur-sm group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
