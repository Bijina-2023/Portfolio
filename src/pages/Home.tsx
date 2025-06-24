import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaMedium, FaDribbble } from "react-icons/fa";
import by1 from "../assets/images/bijprofile.png";
import resumePdf from "../assets/resume/Bijina Resume Latest.pdf";

const words = [
  { text: "write", outline: true },
  { text: "paint", outline: true },
  { text: "& design.", highlight: true },
];

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-6 text-center">
        <img src={by1} alt="My Logo" className="h-50 w-auto mb-8 -mt-20" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          Hi, I'm{" "}
          <span className="relative inline-block group">
            <span className="relative z-10 mb-8">Bijina Regmi</span>
            <span className="absolute inset-0 bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>
          </span>
        </h1>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold flex flex-wrap justify-center gap-2">
          {words.map((w, i) => (
            <span
              key={i}
              className={`relative inline-block px-1 py-0.5 cursor-pointer group ${
                w.highlight
                  ? "text-gray-900 bg-yellow-300"
                  : "text-gray-900 outline-gray-400"
              }`}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-900">
                {w.text}
              </span>
              {w.highlight && (
                <span className="absolute inset-0 bg-yellow-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>
              )}
            </span>
          ))}
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
          As a UX Engineer and Visual Storyteller, I craft intuitive digital
          experiences that balance form and function.
        </p>

        <a
          href={resumePdf}
          download="Bijina_Regmi_Resume.pdf"
          className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
        >
          Download Résumé
        </a>
      </section>

      {/* Recent Work Banners */}
      <section className="space-y-8 px-6">
        <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-4 px-2">
          My Recent Work
        </h3>
        {recent.map((item, idx) => (
          <Link
            key={idx}
            to="/projects"
            className={`${item.bg} flex flex-col sm:flex-row items-center p-8 rounded-lg shadow-lg transition hover:shadow-2xl`}
          >
            <div className="sm:w-1/3 h-40 bg-gray-200 rounded-lg"></div>
            <div className="sm:ml-8 mt-4 sm:mt-0 text-gray-900">
              <h4 className="text-2xl font-bold mb-1">{item.title}</h4>
              <p className="text-lg text-gray-700">{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Connect Section */}
      <section className="mt-16 py-12 bg-gray-100 text-center">
        <p className="text-xl text-gray-700 mb-4">Let's connect</p>
        <p className="text-sm text-gray-500 mb-6">
          Get in touch for opportunities or just to say hi! 👋
        </p>
        <div className="flex items-center justify-center space-x-6 text-gray-700 text-2xl">
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:bijinaregmi2023@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://medium.com" aria-label="Medium">
            <FaMedium />
          </a>

          <a href="https://medium.com" aria-label="Dribbble">
            <FaDribbble />
          </a>
        </div>
      </section>
    </div>
  );
};

const recent = [
  {
    title: "Deerhold Japan Website",
    subtitle: "A corporate platform merging Japanese and Nepalese aesthetics.",
    bg: "bg-blue-200",
  },
  {
    title: "ULCI Revamp",
    subtitle: "Modern UX overhaul for an education platform.",
    bg: "bg-yellow-200",
  },
  {
    title: "Healthcare Dashboard",
    subtitle: "Clean, secure data visualizations for clinical use.",
    bg: "bg-green-200",
  },
];

export default Home;
