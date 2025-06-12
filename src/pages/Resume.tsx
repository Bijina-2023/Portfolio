import React from "react";

const Resume: React.FC = () => {
  return (
    <section className="max-w-2xl mx-auto mt-16 text-gray-300 animate-fade-in">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Resume</h2>
      <ul className="space-y-4">
        <li>
          <strong>UI/UX Engineer</strong> – Deerhold Nepal
          <br />
          <span className="text-sm text-gray-400">May 2022 – Present</span>
        </li>
        <li>
          <strong>Teaching Assistant</strong> – Westcliff University
          <br />
          <span className="text-sm text-gray-400">July 2024 – Present</span>
        </li>
        <li>
          <strong>Coding Teacher</strong> – Deerwalk Sifal School
          <br />
          <span className="text-sm text-gray-400">Aug 2021 – Aug 2022</span>
        </li>
      </ul>
    </section>
  );
};

export default Resume;
