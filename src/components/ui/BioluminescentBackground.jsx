import { useState, useMemo } from 'react';

/**
 * BioluminescentBackground Component
 * Creates a subtle, ambient underwater atmosphere with gentle glowing elements
 * and slowly rising particles - designed to be non-distracting background ambiance
 */

// Bioluminescent color palette
const bioColors = [
  { primary: '#06b6d4', glow: 'rgba(6, 182, 212, 0.3)' },    // cyan
  { primary: '#14b8a6', glow: 'rgba(20, 184, 166, 0.3)' },   // teal
  { primary: '#d946ef', glow: 'rgba(217, 70, 239, 0.25)' },  // magenta
  { primary: '#f472b6', glow: 'rgba(244, 114, 182, 0.25)' }, // coral
  { primary: '#818cf8', glow: 'rgba(129, 140, 248, 0.25)' }, // electric
  { primary: '#4ade80', glow: 'rgba(74, 222, 128, 0.25)' },  // green
];

// Generate floating particles
const generateParticles = (count) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      x: Math.random() * 100,
      startY: 100 + Math.random() * 20, // Start below viewport
      size: 1 + Math.random() * 2.5, // Slightly smaller
      duration: 20 + Math.random() * 30, // 20-50 seconds to rise (slightly faster)
      delay: Math.random() * 25, // Staggered starts
      horizontalDrift: (Math.random() - 0.5) * 12, // Gentle side-to-side
      colorIndex: Math.floor(Math.random() * bioColors.length),
      opacity: 0.15 + Math.random() * 0.35, // 0.15 - 0.5 opacity (more subtle)
    });
  }
  return particles;
};

// Generate ambient glow orbs (stationary, color-shifting)
const generateGlowOrbs = (count) => {
  const orbs = [];
  for (let i = 0; i < count; i++) {
    orbs.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 80 + Math.random() * 150, // Large, diffuse glows
      colorShiftDuration: 20 + Math.random() * 25, // 20-45 second color cycles
      colorShiftDelay: Math.random() * 20,
      breatheDuration: 15 + Math.random() * 20, // 15-35 second breathing
      breatheDelay: Math.random() * 15,
      baseOpacity: 0.03 + Math.random() * 0.04, // Very subtle: 0.03-0.07
    });
  }
  return orbs;
};

// Floating particle component
function FloatingParticle({ particle }) {
  const color = bioColors[particle.colorIndex];

  return (
    <circle
      className="floating-particle"
      cx={particle.x}
      cy={particle.startY}
      r={particle.size}
      fill={color.primary}
      style={{
        '--rise-duration': `${particle.duration}s`,
        '--rise-delay': `${particle.delay}s`,
        '--drift-x': `${particle.horizontalDrift}vw`,
        '--particle-opacity': particle.opacity,
        '--glow-color': color.glow,
      }}
    />
  );
}

// Ambient glow orb component
function GlowOrb({ orb }) {
  return (
    <div
      className="glow-orb"
      style={{
        left: `${orb.x}%`,
        top: `${orb.y}%`,
        width: `${orb.size}px`,
        height: `${orb.size}px`,
        '--color-shift-duration': `${orb.colorShiftDuration}s`,
        '--color-shift-delay': `${orb.colorShiftDelay}s`,
        '--breathe-duration': `${orb.breatheDuration}s`,
        '--breathe-delay': `${orb.breatheDelay}s`,
        '--base-opacity': orb.baseOpacity,
      }}
    />
  );
}

export function BioluminescentBackground() {
  // Generate elements once on mount
  const particles = useMemo(() => generateParticles(60), []);
  const glowOrbs = useMemo(() => generateGlowOrbs(6), []);

  return (
    <div className="bioluminescent-background" aria-hidden="true">
      {/* Ambient glow orbs - color shifting background */}
      <div className="glow-orbs-layer">
        {glowOrbs.map((orb) => (
          <GlowOrb key={orb.id} orb={orb} />
        ))}
      </div>

      {/* Floating particles layer */}
      <div className="particles-layer">
        <svg
          viewBox="0 0 100 120"
          preserveAspectRatio="xMidYMid slice"
          className="particles-svg"
        >
          <defs>
            <filter id="particle-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#particle-glow)">
            {particles.map((particle) => (
              <FloatingParticle key={particle.id} particle={particle} />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default BioluminescentBackground;
