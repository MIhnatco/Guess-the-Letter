import React from "react";

import Button from "../Button";
import getHint from "../utils/getHint";

/**
 * GameInput component
 * Render the input and buttons for user interaction in the game
 * Allows the player to input guesses, submit their guesses, and request a hint.
 *
 * @param {Object} props - The props for the GameInput component
 * @param {string} props.letter - Randomly generated letter from alphabet
 * @param {Function} props.setSolution - Function to update the solution/feedback displayed to the player
 * @param {string} props.playerGuess - The player's current guess input
 * @param {Function} props.handlePlayerChange - Function to handle player's guesses
 * @param {Function} props.handleGuess - Function to handle the submission of player's guess
 * @param {boolean} props.isDisable - Whether the input and buttons should be disabled
 * @returns  {JSX.Element} The GameInput component
 */

function GameInput({
  letter,
  setSolution,
  playerGuess,
  handlePlayerChange,
  handleGuess,
  isDisabled,
}) {
  return (
    <article className="flex space-x-4">
      <input
        type="text"
        className="text-red-800 w-12 h-12 text-center border rounded-sm shadow-md"
        aria-label="Enter your guess"
        aria-describedby="instructions"
        value={playerGuess}
        onChange={handlePlayerChange}
        maxLength={1}
        disabled={isDisabled}
      />

      <p id="instructions" className="sr-only">
        Enter a single letter to guess the randomly generated letter.
      </p>

      <Button
        color="bg-green-600"
        onClick={handleGuess}
        aria-label="Submit your guess"
        disabled={isDisabled}
      >
        Your Guess
      </Button>

      <Button
        onClick={() => getHint(letter, setSolution)}
        color="bg-blue-600"
        aria-label="Get a hint for the letter"
        disabled={isDisabled}
      >
        Get a Hint
      </Button>
    </article>
  );
}

export default GameInput;
