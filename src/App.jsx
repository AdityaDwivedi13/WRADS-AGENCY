import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AILab from './pages/AILab';
import Leadership from './pages/Leadership';
import RosePetals from './components/3d/RosePetals';

// ScrollToTop component to reset scroll on route change
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <RosePetals />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sectors" element={<Services />} />
          <Route path="/ai-lab" element={<AILab />} />
          <Route path="/leadership" element={<Leadership />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
