import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
          {/* routes */}
          <Routes>
            <Route path="/react-portfolio/" element={<Home />} />
            <Route path="/react-portfolio/about" element={<About />} />
            <Route path="/react-portfolio/projects" element={<Projects />} />
            <Route path="/react-portfolio/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
