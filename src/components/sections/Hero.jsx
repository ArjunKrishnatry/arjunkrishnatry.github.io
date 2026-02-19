import { Terminal } from '../ui/Terminal';

/**
 * Hero Section Component
 * Features a terminal animation and call-to-action buttons
 */
export function Hero() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="section min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
            <p className="text-primary font-mono text-sm mb-4 animate-fade-in">
              Hello, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slide-up">
              Arjun{' '}
              <span className="text-gradient">Krishnatry</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              CS Student @ Western | ML Enthusiast
            </p>
            <p className="text-gray-400 mb-8 max-w-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Building intelligent systems with machine learning and crafting
              full-stack applications. Currently working on AI-powered tools
              and exploring deep reinforcement learning.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-all duration-300 font-medium hover:shadow-glow"
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right side - Terminal */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <Terminal />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-16 animate-bounce">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="Scroll to About section"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
