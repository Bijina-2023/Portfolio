import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-extrabold text-yellow-400 mb-4">
        Hi, I'm Bijina Regmi
      </h1>
      <p className="text-lg text-gray-300">
        UX Engineer | Visual Storyteller | Design Educator
      </p>
      <div className="mt-8 space-x-4">
        <a
          href="/projects"
          className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300"
        >
          View Work
        </a>
        <a
          href="/resume"
          className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded hover:bg-yellow-400 hover:text-black"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
