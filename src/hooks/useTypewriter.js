import { useState, useEffect, useCallback, useMemo } from 'react';

/* eslint-disable react-hooks/set-state-in-effect */
// Note: This hook intentionally uses setState in useEffect to create
// a typewriter animation effect. The cascading renders are required
// for the animation to work correctly.

/**
 * Custom hook for typewriter effect
 * @param {Array} commands - Array of command objects with { command, output, delay }
 * @param {number} typingSpeed - Speed of typing in ms (default: 50)
 * @param {number} pauseBetweenCommands - Pause between commands in ms (default: 500)
 */
export function useTypewriter(commands, typingSpeed = 50, pauseBetweenCommands = 500) {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Pre-compute all lines for reduced motion mode
  const allLinesForReducedMotion = useMemo(() => {
    return commands.flatMap(cmd => [
      { type: 'command', text: cmd.command },
      { type: 'output', text: cmd.output }
    ]);
  }, [commands]);

  // Initialize state based on reduced motion preference
  const [displayedLines, setDisplayedLines] = useState(() =>
    prefersReducedMotion ? allLinesForReducedMotion : []
  );
  const [currentCommandIndex, setCurrentCommandIndex] = useState(
    prefersReducedMotion ? commands.length : 0
  );
  const [currentText, setCurrentText] = useState('');
  const [isTypingCommand, setIsTypingCommand] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Derive isComplete from state instead of storing it
  const isComplete = currentCommandIndex >= commands.length;

  // Reset the animation
  const reset = useCallback(() => {
    if (prefersReducedMotion) {
      setDisplayedLines(allLinesForReducedMotion);
      setCurrentCommandIndex(commands.length);
    } else {
      setDisplayedLines([]);
      setCurrentCommandIndex(0);
    }
    setCurrentText('');
    setIsTypingCommand(true);
    setIsPaused(false);
  }, [prefersReducedMotion, allLinesForReducedMotion, commands.length]);

  useEffect(() => {
    // Skip animation for reduced motion or if already complete
    if (prefersReducedMotion || isComplete || isPaused) {
      return;
    }

    const currentCommand = commands[currentCommandIndex];
    if (!currentCommand) return;

    const targetText = isTypingCommand ? currentCommand.command : currentCommand.output;
    const speed = currentCommand.delay || typingSpeed;

    // If we're still typing
    if (currentText.length < targetText.length) {
      const timer = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    }

    // Finished typing current text
    if (isTypingCommand) {
      // Add command to displayed lines and start typing output
      setDisplayedLines(prev => [...prev, { type: 'command', text: currentText }]);
      setCurrentText('');
      setIsTypingCommand(false);
    } else {
      // Add output to displayed lines and move to next command
      setDisplayedLines(prev => [...prev, { type: 'output', text: currentText }]);
      setCurrentText('');
      setIsTypingCommand(true);

      // Pause between commands, then increment index
      setIsPaused(true);
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setCurrentCommandIndex(prev => prev + 1);
      }, pauseBetweenCommands);
      return () => clearTimeout(pauseTimer);
    }
  }, [
    commands,
    currentCommandIndex,
    currentText,
    isTypingCommand,
    isComplete,
    isPaused,
    typingSpeed,
    pauseBetweenCommands,
    prefersReducedMotion
  ]);

  return {
    displayedLines,
    currentText,
    isTypingCommand,
    isComplete,
    reset,
  };
}

export default useTypewriter;
