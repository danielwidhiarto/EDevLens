// src/components/Projects.jsx
const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    link: "#",
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
