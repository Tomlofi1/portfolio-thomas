// Conteúdo do portfólio — fonte única de dados.
// Para atualizar o site, normalmente basta editar este arquivo.

export const profile = {
  name: "Thomas Falcão",
  role: "Desenvolvedor Back-end",
  location: "Maceió, AL",
  email: "tomamorimfalcao@gmail.com",
  github: "https://github.com/Tomlofi1",
  linkedin: "https://www.linkedin.com/in/tomlofi/",
  tagline:
    "APIs REST, integrações com webhooks e automações orientadas a eventos com Node.js, TypeScript e Bun — com foco em confiabilidade, rastreabilidade e facilidade de manutenção.",
  summary: [
    "Sou desenvolvedor back-end e hoje trabalho na Carajás Home Center - Labs, onde desenvolvo e mantenho as integrações e serviços que sustentam processos internos — do atendimento via WhatsApp ao recebimento de notas fiscais.",
    "Meu dia a dia é feito de webhooks, jobs, filas e fluxos orientados a eventos: garantir que um evento seja processado uma única vez, que um dado inválido não passe e que, quando algo falhar, dê para entender o porquê. Antes, passei por C#/.NET e PHP/Laravel, e em projetos próprios exploro Redis e controle de concorrência.",
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  summary?: string;
  stack: string[];
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Carajás Home Center - Labs",
    role: "Desenvolvedor Back-End",
    period: "Dez/2025 — Atual",
    current: true,
    summary:
      "Desenvolvo e mantenho soluções back-end e integrações utilizadas em processos internos.",
    stack: [
      "Node.js",
      "TypeScript",
      "Bun",
      "APIs REST",
      "MySQL",
      "Oracle",
      "Sequelize",
      "Zod",
      "Redis",
      "Swagger/OpenAPI",
      "Git",
    ],
    highlights: [
      "Integrações com a Suri — plataforma de atendimento e chatbot conectada ao WhatsApp — processando eventos via webhooks de contatos, mensagens, mídias, filas e status de atendimento.",
      "Integração da Suri com os sistemas internos de SAC, clientes e tickets: criação e atualização de registros, prevenção de duplicidades e tratamento dos diferentes estados do fluxo de atendimento.",
      "Automação de pesquisas de satisfação (NPS), com validação das respostas, vínculo com atendimentos e finalização automática dos fluxos.",
      "APIs e automações para processos internos: cadastro de fornecedores, recebimento de notas fiscais, consulta de CEP e integração com serviços externos e sistemas corporativos.",
      "Jobs, webhooks e fluxos orientados a eventos, incluindo comunicação em tempo real com SSE.",
      "Investigação e correção de bugs, análise de logs, tratamento de falhas, validação de dados e manutenção de consultas SQL.",
      "Testes, documentação técnica e especificação de APIs com Swagger/OpenAPI.",
      "Modelagem e modernização de soluções internas, buscando mais confiabilidade, rastreabilidade e facilidade de manutenção.",
    ],
  },
  {
    company: "Secretaria de Estado da Educação de Alagoas",
    role: "Estagiário de Desenvolvimento de Sistemas",
    period: "Jan/2025 — Dez/2025",
    summary:
      "Desenvolvimento e manutenção de sistemas internos, com foco em projetos utilizando o framework Laravel (PHP).",
    stack: ["PHP", "Laravel", "MySQL", "Git"],
    highlights: [
      "Implementação de novas funcionalidades, correção de erros e melhorias de performance e usabilidade.",
      "Uso de MySQL para modelagem e manipulação de dados, além de integração com serviços internos.",
      "Apoio na migração e atualização de sistemas legados, com organização do código em arquitetura estruturada.",
      "Versionamento de código com Git.",
    ],
  },
  {
    company: "SomeSoftware",
    role: "Estagiário · Desenvolvimento",
    period: "Mar/2025 — Ago/2025",
    stack: ["C#", ".NET", "Entity Framework", "FastReport", "Syncfusion"],
    highlights: [
      "Desenvolvimento de APIs utilizando C# e .NET, com manipulação de dados por meio do Entity Framework.",
      "Criação de relatórios em PDF com FastReport e Syncfusion, além de consultas SQL e manutenção de sistemas.",
      "Correção de problemas técnicos e melhoria de performance em funcionalidades existentes.",
    ],
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  { title: "Linguagens", items: ["TypeScript", "JavaScript", "C#", "PHP", "SQL"] },
  { title: "Back-end", items: ["Node.js", "Bun", "ElysiaJS", ".NET", "Laravel", "Zod"] },
  { title: "Dados & cache", items: ["MySQL", "Oracle", "PostgreSQL", "SQL Server", "Redis"] },
  { title: "ORMs", items: ["Sequelize", "Drizzle", "Entity Framework", "Eloquent"] },
  {
    title: "Arquitetura",
    items: ["APIs REST", "Webhooks", "Jobs & filas", "Eventos", "SSE", "Concorrência"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "Docker", "Linux", "Swagger/OpenAPI", "Postman/Bruno", "FastReport", "Syncfusion"],
  },
];

export type Project = {
  title: string;
  kind: "professional" | "personal";
  description: string;
  highlights?: string[];
  tech: string[];
  featured?: boolean;
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Integração Suri × WhatsApp",
    kind: "professional",
    featured: true,
    description:
      "Integração entre a Suri — plataforma de atendimento e chatbot conectada ao WhatsApp — e os sistemas internos de SAC, clientes e tickets da Carajás.",
    highlights: [
      "Webhooks de contatos, mensagens, mídias, filas e status de atendimento",
      "Criação e atualização de tickets com prevenção de duplicidades",
      "Tratamento dos diferentes estados do fluxo de atendimento",
    ],
    tech: ["Node.js", "TypeScript", "Bun", "Webhooks", "MySQL", "Oracle", "Zod"],
  },
  {
    title: "Automação de NPS",
    kind: "professional",
    description:
      "Pesquisas de satisfação disparadas e encerradas automaticamente ao fim dos atendimentos.",
    highlights: [
      "Validação das respostas recebidas",
      "Vínculo da resposta com o atendimento de origem",
      "Finalização automática do fluxo",
    ],
    tech: ["Node.js", "TypeScript", "Webhooks", "Jobs", "SQL"],
  },
  {
    title: "APIs para processos internos",
    kind: "professional",
    description:
      "APIs e automações que conectam serviços externos e sistemas corporativos no dia a dia da operação.",
    highlights: [
      "Cadastro de fornecedores e recebimento de notas fiscais",
      "Consulta de CEP e integrações externas",
      "Atualizações em tempo real com SSE",
    ],
    tech: ["Node.js", "TypeScript", "Sequelize", "Zod", "SSE", "Swagger"],
  },
  {
    title: "Ticket Rush",
    kind: "personal",
    description:
      "Backend de venda de ingressos criado para simular alta concorrência, controlar estoque e evitar overbooking.",
    highlights: [
      "Reserva atômica de ingressos com Redis",
      "Fila de espera para picos de acesso",
      "Controle de múltiplas requisições simultâneas",
    ],
    tech: ["TypeScript", "Bun", "ElysiaJS", "Redis", "MySQL"],
  },
  {
    title: "Biblioteca Virtual",
    kind: "personal",
    description:
      "API para gerenciamento de livros, usuários e empréstimos, com controle de disponibilidade, regras de negócio e relatórios de empréstimos.",
    tech: ["C#", ".NET", "Entity Framework", "PostgreSQL", "Swagger"],
    repoUrl: "https://github.com/Tomlofi1/Biblioteca-Virtual",
  },
];

export const education = [
  {
    institution: "Universidade Estácio de Sá",
    course: "Graduação em Ciência da Computação",
    period: "2024 — Atual",
  },
  {
    institution: "Universidade Tiradentes",
    course: "Ciência da Computação · Transferido",
    period: "2021 — 2023",
  },
];

export const certifications = [
  { name: "C# Foundation", issuer: "freeCodeCamp & Microsoft" },
  { name: "JavaScript, Node.js e SQLite", issuer: "Origamid" },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Avançado" },
  { name: "Espanhol", level: "Básico" },
];
