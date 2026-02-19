import { useTypewriter } from '../../hooks/useTypewriter';
import terminalCommands from '../../data/terminal-commands.json';

/**
 * Terminal Component
 * Displays a terminal-style interface with typing animation
 * Commands and outputs are typed out sequentially
 */
export function Terminal() {
  const { displayedLines, currentText, isTypingCommand, isComplete } = useTypewriter(
    terminalCommands.commands,
    50,  // typing speed in ms
    800  // pause between commands in ms
  );

  return (
    <div className="terminal max-w-2xl w-full">
      {/* Terminal Header - macOS style window controls */}
      <div className="terminal-header">
        <span className="terminal-dot bg-red-500"></span>
        <span className="terminal-dot bg-yellow-500"></span>
        <span className="terminal-dot bg-green-500"></span>
        <span className="ml-4 text-xs text-gray-500">terminal</span>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body min-h-[200px]">
        {/* Previously typed lines */}
        {displayedLines.map((line, index) => (
          <div key={index} className="mb-1">
            {line.type === 'command' ? (
              <p>
                <span className="text-green-400">$ </span>
                <span className="text-gray-300">{line.text}</span>
              </p>
            ) : (
              <p className="text-primary pl-2">&gt; {line.text}</p>
            )}
          </div>
        ))}

        {/* Currently typing line */}
        {!isComplete && currentText && (
          <div className="mb-1">
            {isTypingCommand ? (
              <p>
                <span className="text-green-400">$ </span>
                <span className="text-gray-300">{currentText}</span>
                <span className="animate-blink text-gray-300">|</span>
              </p>
            ) : (
              <p className="text-primary pl-2">
                &gt; {currentText}
                <span className="animate-blink">|</span>
              </p>
            )}
          </div>
        )}

        {/* Blinking cursor when complete or waiting */}
        {isComplete && (
          <p>
            <span className="text-green-400">$ </span>
            <span className="animate-blink text-gray-300">|</span>
          </p>
        )}

        {/* Show prompt while waiting to type */}
        {!isComplete && !currentText && displayedLines.length > 0 && (
          <p>
            <span className="text-green-400">$ </span>
            <span className="animate-blink text-gray-300">|</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Terminal;
