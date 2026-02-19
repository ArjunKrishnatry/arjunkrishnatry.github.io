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
              I&apos;m a Computer Science student with a passion for building software
              that makes a difference. I enjoy tackling challenging problems and
              learning new technologies along the way.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              When I&apos;m not coding, you can find me lifting weights at the gym,
              playing basketball, or gaming with friends. I believe in maintaining
              a healthy balance between work and personal interests.
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
              <p className="text-gray-300 font-medium">Computer Science</p>
              <p className="text-gray-400 text-sm">Currently studying</p>
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
                {['Weightlifting', 'Basketball', 'Video Games', 'Music'].map((interest) => (
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
