/**
 * SkillIcon Component
 * Displays a skill with its icon from devicon
 */
export function SkillIcon({ name, icon }) {
  // Devicon CDN URL
  const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`;
  const fallbackUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-plain.svg`;

  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-surface rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group card-hover">
      <img
        src={iconUrl}
        alt={`${name} icon`}
        className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
        onError={(e) => {
          // Try fallback URL if original fails
          if (e.target.src !== fallbackUrl) {
            e.target.src = fallbackUrl;
          }
        }}
      />
      <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
        {name}
      </span>
    </div>
  );
}

export default SkillIcon;
