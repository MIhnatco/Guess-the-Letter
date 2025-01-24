import React from "react";

/**
 * Component to display feedback for player's guess
 * @param {string} solution - feedback
 * @returns {JSX.Element}
 */

function GameFeedback({ solution, attempts }) {
  if (attempts === 0) {
    return <h2 className="font-semibold m-8 text-red-700">{solution}</h2>;
  } else {
    return <h2 className="font-semibold m-8">{solution}</h2>;
  }
}

export default GameFeedback;
