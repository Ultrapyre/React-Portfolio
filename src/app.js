import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Footer from './components/Footer';

function App() {
    return (
      <Router>
          <Header />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/bios" 
                element={<AboutMe />} 
              />
              <Route 
                path="/projects"
                element ={<Projects />}
              /> 
              <Route 
                path="/contacts" 
                element={<ContactMe />} 
              />
            </Routes>
        <Footer />
      </Router>
    );
  }

export default App;