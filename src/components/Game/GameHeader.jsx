import React from "react";

/**
 * A React functional component that renders the game header and instructions for "Guess the Letter" game
 * @returns {JSX.Element} The header section of the app including title, instructions and feedback guide.
 */
function GameHeader() {
  return (
    <header className="text-white" data-testid="header">
      <h1 className="md:text-3xl font-bold text-center mb-8 tracking-wider">
        Guess the Letter
      </h1>
      <p className="mb-8 text-center">
        Guess the letter from alphabet in 5 attempts.
      </p>
      <p className="mb-4">Feedback is provided for each guess:</p>

      <ul className="list-disc list-inside text-left mb-8" instructions>
        <li>"Correct" if the guess matches the letter.</li>
        <li>"Try again!" if the guess is incorrect.</li>
        <li>"Invalid input" if the guess is not a single letter.</li>
      </ul>
    </header>
  );
}

export default GameHeader;
