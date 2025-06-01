import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import KnowledgeBase from './pages/KnowledgeBase';
import SubmitTicket from './pages/SubmitTicket';
import Contact from './pages/Contact';
import Login from './pages/Login';
// import other pages as you create them

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/submit-ticket" element={<SubmitTicket />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;