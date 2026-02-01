import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { Services } from './pages/Services';
import { Showrooms } from './pages/Showrooms';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/services" element={<Services />} />
            <Route path="/showrooms" element={<Showrooms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;