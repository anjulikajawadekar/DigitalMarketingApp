import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Dashboard from './components/Dashboard';
import JobForm from './components/JobForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/apply" element={<JobForm />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer/>
    </Router>
  );
}
