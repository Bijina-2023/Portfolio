import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="max-w-xl mx-auto mt-16 text-gray-300 animate-fade-in">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Get In Touch</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-white border border-gray-300 
      text-gray-700 placeholder-gray-500
      focus:text-gray-500 focus:placeholder-gray-400
      focus:border-gray-600 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-white border border-gray-300 
      text-gray-700 placeholder-gray-500
      focus:text-gray-500 focus:placeholder-gray-400
      focus:border-gray-600 focus:outline-none"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full p-3 rounded bg-white border border-gray-300 
      text-gray-700 placeholder-gray-500
      focus:text-gray-400 focus:placeholder-gray-400
      focus:border-gray-600 focus:outline-none active:outline-none"
        ></textarea>
        <button
          type="submit"
          className="!bg-yellow-400
    px-6 py-2 rounded
    hover:bg-yellow-600  /* same yellow on hover */
    transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
