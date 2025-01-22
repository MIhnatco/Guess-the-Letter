import React, { useState, useEffect } from "react";

import getRandomLetter from "../utils/randomLetter";

const NUM_GUESSES = 5;
const NUM_ATTEMPTS = 5;

/**
 * useGameLogic hook
 */

function useGameLogic() {
  /**Randomly selected letter */
  const [letter, setLetter] = useState("");

  console.log(letter);

  /**When component mounts, random letter is set */
  useEffect(() => {
    setLetter(getRandomLetter());
  }, []);

  /**Player's guesses */
  const [guesses, setGuesses] = useState(new Array(NUM_GUESSES).fill(null));

  /**Player's attempts */
  const [attempts, setAttempts] = useState(NUM_ATTEMPTS);

  /**Player's guess */
  const [playerGuess, setPlayerGuess] = useState("");

  /**Saving player's guess */
  const handlePlayerChange = (event) => {
    setPlayerGuess(event.target.value.toLowerCase());
  };

  /**Solution */
  const [solution, setSolution] = useState("");

  /**Confetti animation */
  const [isWinner, setIsWinner] = useState(false);

  /**Player's guess validation and game management */
  const handleGuess = () => {
    if (!/^[a-z]$/.test(playerGuess)) {
      setSolution("Invalid input. Please, enter a single letter.");
      return;
    }

    /**No duplicate attempts */
    if (guesses.includes(playerGuess)) {
      setSolution(
        `You already guessed "${playerGuess}". Try a different letter.`
      );
      return;
    }

    /**Update the number of attempts */
    setAttempts((prevCount) => prevCount - 1);

    /**Game management */

    if (letter === playerGuess) {
      setSolution(`Correct! The letter was: ${letter}`);
      setIsWinner(true);
      return;
    } else if (attempts - 1 === 0) {
      setAttempts(0);
      setPlayerGuess("");
      setSolution(`Game over. The letter was: ${letter}`);
      return;
    } else {
      const feedback = letter > playerGuess ? "higher" : "lower";

      setSolution(
        `Incorrect. The letter is ${feedback} in the alphabet. Try again.`
      );
    }

    /**Saving player's guesses */
    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];
      const index = newGuesses.findIndex((guess) => guess === null);
      newGuesses[index] = playerGuess;
      return newGuesses;
    });

    setPlayerGuess("");
  };

  /**Reseting the game */
  const resetGame = () => {
    setLetter(getRandomLetter());
    setGuesses(new Array(NUM_GUESSES).fill(null));
    setAttempts(NUM_ATTEMPTS);
    setPlayerGuess("");
    setIsWinner(false);
    setSolution("");
  };

  return {
    letter,
    guesses,
    attempts,
    solution,
    setSolution,
    playerGuess,
    handlePlayerChange,
    handleGuess,
    isWinner,
    resetGame,
  };
}

export default useGameLogic;
