import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Skip to main content link for accessibility */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      {/* Temporary test content - will be replaced with actual components */}
      <main id="main" className="container-custom py-20">
        <h1 className="text-4xl font-bold mb-4">
          Portfolio Setup <span className="text-gradient">Complete</span>
        </h1>

        <p className="text-gray-400 mb-8">
          The project foundation is ready. Current theme: <strong className="text-primary">{theme}</strong>
        </p>

        <button
          onClick={toggleTheme}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          Toggle Theme
        </button>

        <div className="mt-12 p-6 terminal">
          <div className="terminal-header">
            <span className="terminal-dot bg-red-500"></span>
            <span className="terminal-dot bg-yellow-500"></span>
            <span className="terminal-dot bg-green-500"></span>
          </div>
          <div className="terminal-body">
            <p className="text-green-400">$ npm run dev</p>
            <p className="text-gray-400">Server running at http://localhost:5173</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-surface rounded-lg border border-border card-hover">
            <h3 className="font-semibold text-primary mb-2">Phase 1</h3>
            <p className="text-sm text-gray-400">Project Setup - Complete</p>
          </div>
          <div className="p-4 bg-surface rounded-lg border border-border card-hover">
            <h3 className="font-semibold mb-2">Phase 2</h3>
            <p className="text-sm text-gray-400">Layout Components - Next</p>
          </div>
          <div className="p-4 bg-surface rounded-lg border border-border card-hover">
            <h3 className="font-semibold mb-2">Phase 3</h3>
            <p className="text-sm text-gray-400">Hero Section - Pending</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
