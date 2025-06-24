import React from "react";
import { FaLinkedin, FaEnvelope, FaMedium } from "react-icons/fa";

const About: React.FC = () => (
  <div className="w-full bg-white text-gray-900">
    {/* Intro */}
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        A little bit about myself.
      </h2>
      <p className="text-gray-700 mb-4">
        My name is Bijina Regmi and I’m passionate about improving lives through
        design. I constantly learn new things every day and love meeting people
        who are motivated and unafraid to share their ideas with the world.
      </p>
      <p className="text-gray-700">
        I’m a self-taught designer and have absorbed many UI/UX concepts through
        workshops, blogs, and hands-on projects at work. I enjoy big-picture
        thinking and see projects through from ideation all the way to
        development.
      </p>
    </section>

    {/* Values */}
    <section className="bg-yellow-50 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h3 className="text-2xl font-semibold">My values</h3>
        <div className="space-y-6 text-gray-700">
          <div>
            <p className="font-semibold">😀 Passion is everything.</p>
            <p className="text-sm">
              If you don’t enjoy what you’re doing—move. You’re not a tree.
              Channel your energy into something you believe in.
            </p>
          </div>
          <div>
            <p className="font-semibold">🌱 Always be learning.</p>
            <p className="text-sm">
              Humans are constantly growing. I seek feedback, attend meetups,
              and explore new tools in my spare time to improve.
            </p>
          </div>
          <div>
            <p className="font-semibold">🎨 Embrace your creativity.</p>
            <p className="text-sm">
              Whether it’s singing, painting, or design, creative outlets keep
              ideas fresh and inspire innovation.
            </p>
          </div>
          <div>
            <p className="font-semibold">🙏 Stay humble.</p>
            <p className="text-sm">
              Treat everyone with respect. We all share challenges and
              triumphs—stay true to yourself and others.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Testimonials</h3>
        <blockquote className="text-gray-700 italic space-y-4">
          <p>
            “Working with Bijina has been transformative. Her design insights
            and proactive attitude helped us ship our product faster and with
            higher quality.”
          </p>
          <footer className="text-right text-sm">
            — Alex Doe, Product Lead at Acme Corp
          </footer>
        </blockquote>
      </div>
    </section>

    {/* More About Me */}
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-lg text-center text-gray-600 mb-8">
          More about me
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="#" className="group relative overflow-hidden rounded-lg">
            <img
              src="/assets/music-placeholder.jpg"
              alt="Music"
              className="w-full h-48 object-cover group-hover:scale-105 transition"
            />
            <span className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-2xl font-semibold">Music</span>
            </span>
          </a>
          <a href="#" className="group relative overflow-hidden rounded-lg">
            <img
              src="/assets/art-placeholder.jpg"
              alt="Art"
              className="w-full h-48 object-cover group-hover:scale-105 transition"
            />
            <span className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-2xl font-semibold">Art</span>
            </span>
          </a>
        </div>
      </div>
    </section>

    {/* Connect Footer */}
    <section className="py-12 bg-white text-center">
      <p className="text-xl text-gray-700 mb-2">Let's connect</p>
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
      </div>
    </section>
  </div>
);

export default About;
