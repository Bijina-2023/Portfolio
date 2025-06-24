import React from "react";

const rawImages = import.meta.glob("../assets/images/*.png", {
  eager: true,
  import: "default",
});

const imageMap: Record<string, string> = {};
Object.entries(rawImages).forEach(([path, url]) => {
  const fileName = path.split("/").pop() || "";
  imageMap[fileName] = url as string;
});

const projectsLayout = [
  {
    title: "Deerhold Japan Website",
    description:
      "A clean, culturally-aware corporate site blending Japanese and Nepalese aesthetics.",
    bg: "bg-white",
    imageName: "bybijj1.png",
  },
  {
    title: "ULCI Revamp",
    description:
      "Modern UX overhaul for an education platform with clear navigation and visual structure.",
    bg: "bg-blue-50",
    imageName: "bybijj1.png",
  },
  {
    title: "Healthcare Dashboard",
    description:
      "Secure, responsive data visualizations optimized for clinical environments.",
    bg: "bg-white",
    imageName: "bybijj1.png",
  },
];

const projects = projectsLayout.map((project) => ({
  ...project,
  image: imageMap[project.imageName] || "", // Fallback to empty string if not found
}));

const Projects: React.FC = () => (
  <div className="w-full bg-white text-gray-900">
    <header className="max-w-4xl mx-auto py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">My Recent Projects</h2>
      <p className="text-lg text-gray-700">
        A selection of design and development work showcasing end-to-end product
        solutions.
      </p>
    </header>

    {projects.map((project, idx) => (
      <section
        key={idx}
        className={`${project.bg} py-16 px-6 flex flex-col lg:flex-row items-center`}
      >
        <div className="lg:w-1/2">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
          <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
          <p className="text-gray-700 leading-relaxed">{project.description}</p>
          <p className="mt-6 text-blue-500 font-medium hover:underline">
            View Case Study →
          </p>
        </div>
      </section>
    ))}
  </div>
);

export default Projects;
