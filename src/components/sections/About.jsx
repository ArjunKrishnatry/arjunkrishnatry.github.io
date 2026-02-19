/**
 * About Section Component
 * Displays personal introduction, education, and interests
 */
export function About() {
  return (
    <section id="about" className="section bg-surface">
      <div className="container-custom">
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Introduction */}
          <div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I&apos;m a Computer Science student at the University of Western Ontario
              with a passion for machine learning and full-stack development. I enjoy
              building intelligent systems and creating software that solves real problems.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Recently, I completed a Machine Learning internship where I built Deep Q-Network
              agents for optimization problems. I&apos;m also working on CodeBuster, an AI-powered
              plagiarism detector that will be presented at the Canadian Undergraduate Conference on AI.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              When I&apos;m not coding, you can find me lifting weights at the gym,
              playing basketball, or gaming with friends.
            </p>

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Education */}
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                Education
              </h3>
              <p className="text-gray-300 font-medium">BSc, Honors Specialization in Computer Science</p>
              <p className="text-gray-400 text-sm">University of Western Ontario • Expected 2027</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                  Western Scholarship of Distinction
                </span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                  Dean&apos;s Honor List 2023
                </span>
              </div>
            </div>

            {/* Clubs */}
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Clubs & Activities
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Western AI', 'CS Undergraduate Club', 'Cyber Society'].map((club) => (
                  <span
                    key={club}
                    className="px-3 py-1 bg-surface text-gray-300 text-sm rounded-full border border-border"
                  >
                    {club}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Weightlifting', 'Basketball', 'Video Games'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
