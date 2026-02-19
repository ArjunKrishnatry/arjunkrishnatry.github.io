import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { Blog } from './components/sections/Blog';

// Section IDs for scroll spy
const sectionIds = ['hero', 'about', 'projects', 'skills', 'blog', 'contact'];

function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(sectionIds);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to main content link for accessibility */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      {/* Header */}
      <Header theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />

      {/* Main Content */}
      <main id="main" className="flex-1 pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
