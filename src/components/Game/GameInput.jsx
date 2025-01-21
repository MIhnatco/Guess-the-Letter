import React from "react";

import Button from "../Button";
import getHint from "../utils/getHint";

/**
 * GameInput component
 * Render the input and buttons for user interaction in the game
 * Allows the player to input guesses, submit their guesses, and request a hint.
 * 
 * @returns  {JSX.Element} The GameInput component
 */


function GameInput() {
  return (
    <article className="flex space-x-4">
      <input
        type="text"
        aria-label="Enter your guess"
        aria-describedby="instructions"
      />

      <p id="instructions" className="sr-only">
        Enter a single letter to guess the randomly generated letter.
      </p>

      <Button>Your Guess</Button>
      <Button onClick={() => getHint()}>Get a Hint</Button>
    </article>
  );
}

export default GameInput;
