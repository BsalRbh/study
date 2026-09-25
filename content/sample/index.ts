import type { SubjectContent } from "@/content/types";

export const sampleContent: SubjectContent = {
  flashcards: [
    {
      id: "fc-1",
      unit: "Unit 1: Foundations",
      tier: "core",
      front: "What is a Data Flow Diagram (DFD)?",
      back: "A DFD is a graphical representation showing how data moves through a system between processes, data stores, and external entities.",
    },
    {
      id: "fc-2",
      unit: "Unit 1: Foundations",
      tier: "core",
      front: "What is an Entity-Relationship (ER) Diagram?",
      back: "An ER diagram models the entities in a system, their attributes, and the relationships (with cardinality) between them.",
    },
    {
      id: "fc-3",
      unit: "Unit 1: Foundations",
      tier: "hedge",
      front: "What is a Decision Table?",
      back: "A tabular format listing conditions and actions, used to represent complex conditional business logic compactly.",
    },
    {
      id: "fc-4",
      unit: "Unit 2: Design",
      tier: "core",
      front: "What is Normalization?",
      back: "The process of organizing database tables to reduce redundancy and improve data integrity, done via normal forms (1NF, 2NF, 3NF).",
    },
    {
      id: "fc-5",
      unit: "Unit 2: Design",
      tier: "hedge",
      front: "What is a Use Case Diagram?",
      back: "A UML diagram showing actors and the use cases (system functions) they interact with.",
    },
  ],
  cheatSheet: {
    gradingNote:
      "Purbanchal grades on elaboration: 12-mark answers need 250-400+ words with intro, explained points, examples, and a conclusion. Don't write bare bullet points.",
    sections: [
      {
        heading: "Core Concepts",
        tier: "core",
        items: [
          "DFD: processes, data stores, data flows, external entities",
          "ER Diagram: entities, attributes, relationships, cardinality",
          "Normalization: 1NF, 2NF, 3NF",
        ],
      },
      {
        heading: "Hedge / Safety Net",
        tier: "hedge",
        items: ["Decision Tables", "Decision Trees", "Use Case Diagrams"],
      },
    ],
  },
  diagrams: [
    {
      id: "dg-1",
      title: "Sample ER Diagram — Library System",
      scenario: "A library system with Members, Books, and Loans.",
      svg: "<svg viewBox='0 0 200 100'><rect x='10' y='10' width='80' height='30' fill='none' stroke='currentColor'/><text x='50' y='30' font-size='10' text-anchor='middle'>Member</text></svg>",
      mistakes: [
        { text: "Confusing cardinality (1:N) with participation (mandatory/optional)." },
        { text: "Leaving a DFD process with only inputs or only outputs (a 'black hole')." },
      ],
    },
  ],
  mockPaper: {
    title: "Mock Paper 1",
    instructions: "Group A: answer both (2x12=24). Group B: answer 7 of 8 (7x8=56).",
    questions: [
      {
        id: "mp-a1",
        group: "A",
        marks: 12,
        prompt: "Explain the System Development Life Cycle (SDLC) with its phases.",
        answer:
          "The System Development Life Cycle (SDLC) is a structured process used by analysts to design, develop, and maintain information systems, ensuring that a system is built systematically rather than ad hoc. It consists of several distinct phases that guide a project from initial idea to a working system. The first phase, Preliminary Investigation, involves identifying the problem and assessing feasibility. Following this, Requirement Analysis gathers detailed functional and non-functional needs from stakeholders, often through interviews and questionnaires. The System Design phase then translates these requirements into technical blueprints, including ER diagrams and DFDs, specifying how data will flow and be stored. In the Implementation phase, the actual code is written and the system is built according to the design specifications. Testing follows, where the system is rigorously checked for bugs and validated against requirements using unit, integration, and system-level tests. Once testing is complete, the system moves to Deployment, where it is installed and made available to end users, often accompanied by training. Finally, the Maintenance phase involves ongoing support, bug fixes, and enhancements throughout the system's operational life. For example, a hospital management system would move through requirement gathering with doctors and staff, design of patient-record ER diagrams, coding of the appointment module, testing against real patient scenarios, deployment across hospital wings, and continual maintenance as regulations change. In conclusion, SDLC provides a disciplined roadmap that reduces risk and ensures a system meets its intended purpose.",
        years: ["2019", "2021"],
      },
    ],
  },
  pastPapers: {
    years: ["2017", "2018", "2019", "2021"],
    questions: [
      {
        id: "pp-b1",
        group: "B",
        topic: "DFD",
        marks: 8,
        prompt: "Draw and explain a Level-0 DFD for an online food ordering system.",
        answer:
          "A Level-0 DFD, also called a context diagram, provides a high-level overview of a system by showing it as a single process interacting with external entities, without exposing internal sub-processes. For an online food ordering system, the central process would be labeled 'Online Food Ordering System,' and the external entities would include the Customer, the Restaurant, and the Payment Gateway. The Customer entity sends a 'Place Order' data flow into the system and receives an 'Order Confirmation' data flow back. The system sends 'Order Details' to the Restaurant entity and receives 'Order Status' updates in return. Similarly, the system sends 'Payment Request' data to the Payment Gateway and receives a 'Payment Confirmation' response. This diagram deliberately hides internal details like order validation or inventory checks, which would instead appear in a Level-1 DFD that decomposes the single process into multiple sub-processes. The purpose of keeping Level-0 simple is to give stakeholders an immediate, non-technical understanding of what data enters and leaves the system boundary. A common mistake students make is adding data stores at this level; Level-0 typically omits data stores to keep the context focused purely on external interactions. In summary, the Level-0 DFD for this system clearly bounds the scope of the food ordering platform and establishes the three key external interactions before deeper decomposition is attempted.",
        years: ["2018"],
      },
    ],
  },
  glossary: [
    { term: "Entity", definition: "A real-world object or concept about which data is stored (e.g. Student, Book)." },
    { term: "Cardinality", definition: "The numeric nature of a relationship between entities (1:1, 1:N, M:N)." },
    { term: "Actor", definition: "An external user or system that interacts with a use case." },
  ],
  syllabus: {
    units: [
      {
        unit: "Unit 1: Foundations",
        topics: ["SDLC", "Feasibility Study", "DFD", "ER Diagrams"],
        weightageMarks: 24,
      },
      {
        unit: "Unit 2: Design",
        topics: ["Normalization", "Use Case Diagrams", "Class Diagrams"],
        weightageMarks: 20,
      },
    ],
  },
};
