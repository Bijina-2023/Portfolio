import React from "react";

const projects = [
  {
    title: "Deerhold Japan Website",
    description:
      "A clean, culturally-aware corporate site blending Japanese and Nepalese aesthetics.",
  },
  {
    title: "ULCI Revamp",
    description:
      "Modern UX overhaul for an education platform with clear navigation and visual structure.",
  },
  {
    title: "Healthcare Dashboard",
    description:
      "Secure, responsive data visualizations optimized for clinical environments.",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto mt-16 animate-fade-in">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
