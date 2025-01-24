import React from "react";

import Confetti from "react-confetti";

import GameHeader from "./components/Game/GameHeader";
import GameInput from "./components/Game/GameInput";
import GameBoard from "./components/Game/GameBoard";
import GameFeedback from "./components/Game/GameFeedback";
import GameReset from "./components/Game/GameReset";

import useGameLogic from "./components/hooks/useGameLogic";

/**
 * Guess the letter app
 * @returns {JSX.Element}
 */

function App() {
  const {
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
  } = useGameLogic();
  return (
    <div className="App min-h-screen bg-gradient-to-br from-[#85A98F] to-[#384436] md:text-2xl flex flex-col items-center justify-center text-white font-sans">
      {isWinner && <Confetti />}

      <GameHeader />

      <GameInput
        playerGuess={playerGuess}
        handlePlayerChange={handlePlayerChange}
        handleGuess={handleGuess}
        isDisabled={attempts === 0}
        letter={letter}
        setSolution={setSolution}
      />

      <GameBoard guesses={guesses} attempts={attempts} />
      <GameFeedback solution={solution} attempts={attempts} />
      <GameReset onReset={resetGame} />
    </div>
  );
}

export default App;
