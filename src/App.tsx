import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { ByBijj } from "./pages/ByBijj";
import Contact from "./pages/Contact";
import by1 from "./assets/images/bijprofile.png";
export default function App() {
  return (
    <Router>
      <div className=" bg-white text-gray-900 min-h-screen font-sans flex flex-col w-full">
        <header className="p-5 flex justify-between items-center ">
          <img src={by1} alt="My Logo" className="h-15 w-auto" />

          <nav className="space-x-4 ">
            <Link to="/" className="hover:text-yellow-300 ">
              Home
            </Link>
            <Link to="/about" className="hover:text-yellow-300">
              About
            </Link>
            <Link to="/projects" className="hover:text-yellow-300">
              Projects
            </Link>
            <Link to="/bybijj" className="hover:text-yellow-300">
              By Bijj
            </Link>

            <Link to="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </nav>
        </header>

        <main className="p-6 flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/bybijj" element={<ByBijj />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="text-center p-6 border-t border-violet-300">
          <p className="text-sm text-gray-400">Bijina Regmi</p>
        </footer>
      </div>
    </Router>
  );
}
