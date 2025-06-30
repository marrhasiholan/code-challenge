export interface Project {
  title: string;
  technologies: string[];
  image: string;
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
}

export const project: Project[] = [
  {
    title: "Interactive Healthcare Data Analytics Platform for MedTech Startup",
    technologies: ["React", "PostgreSQL", "Python (Flask)", "Docker", "GCP"],
    image: "/project1.png",
    star: {
      situation:
        "An emerging MedTech startup faced significant challenges in visualizing and analyzing large, complex patient datasets collected from various medical devices. They urgently needed a secure, intuitive, and scalable platform capable of integrating data from disparate sources, enabling real-time analysis, and presenting clear insights to researchers and healthcare providers for better decision-making. Their existing system was an inefficient, error-prone, spreadsheet-based ad-hoc solution.",
      task: "I was responsible for designing and developing the full-stack architecture of this platform, from secure data ingestion to front-end visualization. The primary goal was to create a robust system that could handle increasing data volumes, provide fast data querying, and display interactive visualizations easily understandable by non-technical users. Additionally, ensuring compliance with healthcare data security standards (e.g., HIPAA) was a critical requirement.",
      action:
        "For the back-end, I built RESTful APIs using Flask in Python, with PostgreSQL as the relational database for efficient and structured data storage. I implemented a secure data ingestion module to handle various input file formats and ensure data integrity. On the front-end, I utilized React to create an interactive dashboard, leveraging D3.js for custom data visualizations such as time-series graphs, heatmaps, and bar charts that allowed for data drill-down. I containerized the application using Docker for consistent deployment and orchestrated it on Google Cloud Platform, implementing Load Balancing and Auto-Scaling for optimal performance. Throughout the project, I adhered to clean code practices, wrote unit and integration tests, and collaborated closely with the data science team for data validation and interpretation.",
      result:
        "The platform was successfully launched on time, leading to a 60% reduction in the time required for researchers to analyze patient data compared to previous manual methods. Data interpretation error rates decreased by 25% due to clear and interactive visualizations. The client reported a significant increase in operational efficiency and their ability to identify patient trends more rapidly, positively impacting new product development strategies and patient care.",
    },
  },
];
