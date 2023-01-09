export const skills = [
  {
    title: "Programación",
    skills: [
      { name: "Java", percentage: 80 },
      { name: "JavaScript", percentage: 95 },
      { name: "TypeScript", percentage: 85 },
      { name: "Python", percentage: 40 },
      { name: "C#", percentage: 35 },
      { name: "C", percentage: 25 },
    ],
  },
  {
    title: "Office",
    skills: [
      { name: "Word", percentage: 75 },
      { name: "Excel", percentage: 70 },
      { name: "Powerpoint", percentage: 90 },
      { name: "Access", percentage: 50 },
    ],
  },

  {
    title: "Sistemas operativos",
    skills: [
      { name: "Windows", percentage: 80 },
      { name: "Linux", percentage: 70 },
      { name: "Mac", percentage: 65 },
    ],
  },

  {
    title: "Idiomas",
    skills: [{ name: "Castellano" }, { name: "Ingles" }],
  },

  {
    title: "Frameworks FrontEnd",
    skills: [{ name: "Angular" }, { name: "React" }, { name: "Oracle JET" }],
  },

  {
    title: "Frameworks Backend",
    skills: [{ name: "Spring Boot" }, { name: "Node JS" }, { name: "Nest JS" }],
  },
];

export const courses = [
  {
    name: "Master Javascript",
    link: "",
    skillsLearned: [
      "JAVASCRIPT",
      "JQUERY",
      "TYPESCRIPT",
      "ANGULAR",
      "NODEJS",
      "EXPRESJS",
      "MONGODB",
    ],
  },
  {
    name: "Curso Unity 2D",
    link: "",
    skillsLearned: ["UNITY", "C#"],
  },
  {
    name: "Curso Diseño WEB",
    link: "",
    skillsLearned: ["HTML5", "CSS", "JAVASCRIPT", "JQUERY", "NODEJS"],
  },

  {
    name: "React: De cero a experto ( Hooks y MERN )",
    link: "",
    skillsLearned: ["HTML5", "CSS", "JAVASCRIPT", "REACT", "HOOKS"],
  },
  {
    name: "Introducción al desarrollo backend con Node.js y Express",
    link: "",
    skillsLearned: ["NODEJS", "EXPRESS"],
  },
  {
    name: "Angular: De cero a experto",
    link: "",
    skillsLearned: ["NODEJS", "EXPRESS"],
  },
  {
    name: "Angular Avanzado:  Lleva tus bases al siguiente nivel - MEAN",
    link: "",
    skillsLearned: ["NODEJS", "EXPRESS"],
  },

  {
    name: "Guía compelta JUnit y Mockito incluye Spring Boot Test 2022",
    link: "",
    skillsLearned: ["NODEJS", "EXPRESS"],
  },
];

export const academicBackground = [
  {
    title: "Máster en Ingenieria Informática",
    description:
      "Lo cursé en la Escuela Superior de Informática de la Universidad de Castilla-La Mancha. Durante esta etapa, aprendí diversos temas como la realidad virtual, la contenerización, la computación de altas prestaciones, gestión de proyectos, etc. Lo que más me interesó, sin lugar a dudas, fue la computación cuántica. Esta temática es la que traté en mi trabajo de fin de máster (TFM), en el que obtuve la máxima calificación.",
    beginYear: 2020,
    endYear: 2022,
  },

  {
    title: "Grado en Ingenieria Informática",
    description:
      "Cursado en la Escuela Superior de Informática de la Universidad de Castilla-La Mancha. La intensificación escogida fue la de Tecnologías de la Información. En esta etapa, me gustaría destacar la obtención de la matrícula de honor en mi trabajo fin de grado (TFG): Asistente virtual para onboarding y soporte a empleados.",
    beginYear: 2015,
    endYear: 2020,
  },
  {
    title: "Bachillerato",
    description:
      "Bachillerato (Científico - Tecnológico) cursado en I.E.S Estados del Duque. Siempre me habían gustado mucho las asignaturas de matemáticas, física e informática. Por este motivo, me entró mucha curiosidad por el mundo de las tecnologías de información y decidí adentrarme más en ese mundo.",
    beginYear: 2013,
    endYear: 2015,
  },
];

export const professionalExperience = [
  {
    companyName: "Docpath",
    beginDate: "2021-11-01",
    endDate: new Date().toDateString(),
    location: "Ciudad Real",
    jobTitle: "Full Stack Developer",
    technologies: [
      "Java",
      "Spring Boot",
      "NodeJS",
      "Angular",
      "MySQL",
      "SQL Server",
    ],
  },
  {
    companyName: "Alcorce Telecomunicaciones",
    beginDate: "2021-03-01",
    endDate: "2021-11-01",
    location: "Ciudad Real",
    jobTitle: "Full Stack Developer",
    technologies: ["Java", "Spring Boot", "Angular", "Microservicios", "MongoDB"],
  },
  {
    companyName: "FK Interactive",
    beginDate: "2020-09-01",
    endDate: "2021-02-28",
    location: "Ciudad Real",
    jobTitle: "Full Stack Developer",
    technologies: ["NodeJS", "NestJS", "Angular", "PostgreSQL", "AWS"],
  },
  {
    companyName: "Avanttic",
    beginDate: "2020-02-01",
    endDate: "2020-07-31",
    location: "Madrid",
    jobTitle: "Becario",
    technologies: [
      "NodeJS",
      "Express",
      "Oracle Jet",
      "MongoDB",
      "Oracle Digital Assistant",
      "Amazon Lex",
      "Google Dialogflow",
    ],
  },
];
