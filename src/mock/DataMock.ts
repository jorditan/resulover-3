import { IResumen } from "../interfaces/IResumen";

export const mockResumes: IResumen[] = [
  {
    id: "1",
    title: "Introduction to React Hooks",
    descriptcion:
      "A comprehensive guide to understanding and implementing React Hooks in modern applications",
    sourceType: "link",
    source: "https://react.dev/reference/react",
    summary:
      "React Hooks revolutionized functional components by allowing state management and side effects. The most common hooks include useState for state management, useEffect for side effects, and useContext for consuming context. Custom hooks enable reusable logic across components.",
    questions: [
      "What are the rules of hooks?",
      "How does useEffect differ from componentDidMount?",
      "When should you create custom hooks?",
    ],
    citations: [
      "React Documentation - Hooks API Reference",
      "Dan Abramov - Making Sense of React Hooks",
      "React Blog - Introducing Hooks",
    ],
    userNotes:
      "Remember: hooks can only be called at the top level of components",
  },
  {
    id: "2",
    title: "TypeScript Best Practices 2025",
    descriptcion:
      "Modern TypeScript patterns and practices for scalable applications",
    sourceType: "file",
    source: "typescript-guide.pdf",
    summary:
      "TypeScript enhances JavaScript with static typing, interfaces, and advanced type features. Key practices include using strict mode, leveraging utility types, avoiding 'any', and implementing proper type guards. Generics provide type-safe reusable components.",
    questions: [
      "What are utility types and when to use them?",
      "How to handle union types effectively?",
      "What is the difference between type and interface?",
    ],
    citations: [
      "TypeScript Handbook v4.9",
      "Matt Pocock - TypeScript Tips",
      "Total TypeScript - Advanced Patterns",
    ],
    userNotes: "Check out the strict mode configuration for better type safety",
  },
  {
    id: "3",
    title: "REST API Design Principles",
    descriptcion:
      "Fundamental principles for designing RESTful APIs that are scalable and maintainable",
    sourceType: "link",
    source: "https://restfulapi.net/",
    summary:
      "RESTful APIs follow HTTP methods (GET, POST, PUT, DELETE) and use resource-based URLs. Best practices include proper status codes, versioning, pagination, filtering, and documentation. Security considerations include authentication, rate limiting, and CORS.",
    questions: [
      "What HTTP status codes should be used for different scenarios?",
      "How to implement API versioning?",
      "What are the differences between PUT and PATCH?",
    ],
    citations: [
      "Roy Fielding - REST Architectural Style",
      "Microsoft REST API Guidelines",
      "Google API Design Guide",
    ],
    userNotes: "Always use proper HTTP verbs and meaningful resource names",
  },
  {
    id: "4",
    title: "CSS Grid vs Flexbox",
    descriptcion:
      "Understanding when to use CSS Grid or Flexbox for layout design",
    sourceType: "link",
    source: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    summary:
      "CSS Grid excels at two-dimensional layouts with rows and columns, while Flexbox handles one-dimensional layouts. Grid is ideal for page layouts, Flexbox for component layouts. Both can be combined for powerful, responsive designs.",
    questions: [
      "When should you choose Grid over Flexbox?",
      "How to create responsive layouts with Grid?",
      "What are grid template areas?",
    ],
    citations: [
      "CSS-Tricks - Complete Guide to Grid",
      "MDN Web Docs - CSS Grid Layout",
      "Wes Bos - CSS Grid Course",
    ],
    userNotes:
      "Grid for layout, Flexbox for alignment - they complement each other",
  },
  {
    id: "5",
    title: "Docker Containerization Basics",
    descriptcion:
      "Getting started with Docker for application containerization and deployment",
    sourceType: "file",
    source: "docker-fundamentals.pdf",
    summary:
      "Docker packages applications with dependencies into containers, ensuring consistency across environments. Key concepts include images, containers, Dockerfiles, volumes, and networks. Docker Compose orchestrates multi-container applications.",
    questions: [
      "What is the difference between an image and a container?",
      "How to optimize Dockerfile layers?",
      "When to use volumes vs bind mounts?",
    ],
    citations: [
      "Docker Official Documentation",
      "Docker Best Practices Guide",
      "Kubernetes.io - Container Basics",
    ],
    userNotes: "Use multi-stage builds to reduce image size",
  },
  {
    id: "6",
    title: "Git Workflow Strategies",
    descriptcion:
      "Effective Git branching and collaboration strategies for development teams",
    sourceType: "link",
    source: "https://www.atlassian.com/git/tutorials",
    summary:
      "Popular Git workflows include Git Flow, GitHub Flow, and trunk-based development. Each has trade-offs between simplicity and control. Key practices include meaningful commits, branch naming conventions, pull requests, and code reviews.",
    questions: [
      "What are the differences between Git Flow and GitHub Flow?",
      "How to handle merge conflicts effectively?",
      "When to rebase vs merge?",
    ],
    citations: [
      "Atlassian Git Tutorial",
      "GitHub Flow Guide",
      "Vincent Driessen - Git Flow Model",
    ],
    userNotes: "Feature branches should be short-lived for easier integration",
  },
  {
    id: "7",
    title: "MongoDB Schema Design",
    descriptcion:
      "Principles and patterns for designing efficient MongoDB database schemas",
    sourceType: "file",
    source: "mongodb-schema-patterns.pdf",
    summary:
      "MongoDB schema design differs from relational databases. Key patterns include embedding vs referencing, one-to-many relationships, polymorphic schemas, and denormalization. Design should optimize for access patterns and query performance.",
    questions: [
      "When to embed vs reference documents?",
      "How to handle many-to-many relationships?",
      "What are the 6 rules of thumb for MongoDB schema design?",
    ],
    citations: [
      "MongoDB Schema Design Best Practices",
      "MongoDB University - Data Modeling",
      "William Zola - MongoDB Patterns",
    ],
    userNotes:
      "Design schemas based on how data will be queried, not normalized forms",
  },
  {
    id: "8",
    title: "JWT Authentication Guide",
    descriptcion: "Implementing secure authentication using JSON Web Tokens",
    sourceType: "link",
    source: "https://jwt.io/introduction",
    summary:
      "JWTs provide stateless authentication through digitally signed tokens containing claims. Structure includes header, payload, and signature. Best practices include short expiration times, refresh tokens, secure storage, and HTTPS transmission.",
    questions: [
      "How do refresh tokens work with JWTs?",
      "Where should JWTs be stored in the browser?",
      "What claims should be included in a JWT payload?",
    ],
    citations: [
      "RFC 7519 - JWT Standard",
      "OWASP JWT Security Cheat Sheet",
      "Auth0 JWT Handbook",
    ],
    userNotes:
      "Never store sensitive data in JWT payload - it's not encrypted, only encoded",
  },
  {
    id: "9",
    title: "Test-Driven Development (TDD)",
    descriptcion:
      "Mastering the red-green-refactor cycle for better code quality",
    sourceType: "file",
    source: "tdd-methodology.pdf",
    summary:
      "TDD follows a cycle: write failing test (red), write minimal code to pass (green), refactor. Benefits include better design, documentation through tests, and confidence in changes. Common testing patterns include AAA (Arrange-Act-Assert) and mocking.",
    questions: [
      "What are the benefits of TDD?",
      "How to write effective unit tests?",
      "When should you use mocks vs stubs?",
    ],
    citations: [
      "Kent Beck - Test-Driven Development by Example",
      "Martin Fowler - Mocks Aren't Stubs",
      "Robert C. Martin - The Clean Coder",
    ],
    userNotes: "Write tests first to drive better API design",
  },
  {
    id: "10",
    title: "Web Performance Optimization",
    descriptcion:
      "Techniques for improving website loading speed and user experience",
    sourceType: "link",
    source: "https://web.dev/performance/",
    summary:
      "Web performance optimization focuses on Core Web Vitals: LCP, FID, and CLS. Techniques include lazy loading, code splitting, image optimization, caching strategies, CDN usage, and minification. Performance budgets help maintain standards.",
    questions: [
      "What are Core Web Vitals and why do they matter?",
      "How to implement effective code splitting?",
      "What tools are best for performance monitoring?",
    ],
    citations: [
      "Google Web.dev - Performance",
      "MDN - Web Performance",
      "Lighthouse Performance Auditing",
    ],
    userNotes:
      "Measure first with Lighthouse, then optimize the biggest bottlenecks",
  },
];
