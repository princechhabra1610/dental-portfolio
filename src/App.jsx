import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Results from "./sections/Results";
import Testimonials from "./sections/Testimonials";
import Consultation from "./sections/Consultation";

function App() {
  useEffect(() => {
    let scrollTimer = null;

    const handleScroll = () => {
      // Add scrolling class to body to disable hover effects
      document.body.classList.add('scrolling');
      
      // Clear existing timer
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }

      // Set timer to detect when scrolling stops
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 100);
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Listen for hash changes (anchor navigation)
    const handleHashChange = () => {
      // Temporarily add scroll-auto class for immediate navigation
      document.documentElement.classList.add('scroll-auto');
      
      setTimeout(() => {
        document.documentElement.classList.remove('scroll-auto');
      }, 100);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, []);

  return (
    <div className="bg-background text-heading overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Results />
      <Testimonials />
      <Consultation />
      <Footer />
    </div>
  );
}

export default App;