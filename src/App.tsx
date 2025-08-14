import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Add robot cursor style
    document.body.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><g fill=\'%2306b6d4\'><rect x=\'10\' y=\'6\' width=\'12\' height=\'8\' rx=\'2\'/><rect x=\'8\' y=\'14\' width=\'16\' height=\'10\' rx=\'2\'/><circle cx=\'13\' cy=\'9\' r=\'1\'/><circle cx=\'19\' cy=\'9\' r=\'1\'/><rect x=\'14\' y=\'17\' width=\'4\' height=\'2\' rx=\'1\'/><rect x=\'6\' y=\'16\' width=\'2\' height=\'6\' rx=\'1\'/><rect x=\'24\' y=\'16\' width=\'2\' height=\'6\' rx=\'1\'/></g></svg>") 16 16, auto';

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleNavigation = (section: string) => {
    setCurrentSection(section);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <LandingPage onNavigate={handleNavigation} />;
      case 'about':
        return <AboutUs />;
      case 'gallery':
        return <Gallery />;
      case 'events':
        return <Events />;
      case 'team':
        return <Team />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      default:
        return <LandingPage onNavigate={handleNavigation} />;
    }
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header currentSection={currentSection} onNavigate={handleNavigation} />
      <main>
        {renderCurrentSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;