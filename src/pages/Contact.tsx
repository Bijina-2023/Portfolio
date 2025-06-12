import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="max-w-xl mx-auto mt-16 text-gray-300 animate-fade-in">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Get In Touch</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
