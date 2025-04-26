import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';        // Make sure Home.jsx is in the /pages folder
import Skills from './pages/Skills';    // Make sure Skills.jsx is in the /pages folder
import Certificate from './pages/Certificate'; // Make sure Certificate.jsx is in the /pages folder
import Projects from './pages/Projects'; // Make sure Projects.jsx is in the /pages folder
import Contact from './pages/Contact';
import Resume from './pages/Resume'; // Import the Resume page

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white">

        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} /> {/* Add the new route for Resume */}
          </Routes>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
