import React from "react";

import GameHeader from "./components/Game/GameHeader";


/**
 * Guess the letter app
 * @returns {JSX.Element}
 */

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-[#85A98F] to-[#5A6C57] md:text-2xl flex flex-col items-center justify-center text-white font-sans">
      <GameHeader />
    </div>
  );
}

export default App;
