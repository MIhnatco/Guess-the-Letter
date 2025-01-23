import React from 'react'

import Button from "../Button";

/**
 * The GameReset component 
 * Reset the game and play again
 * 
 * @param {Object} props - The props for the GameReset component
 * @param {Function} onReset - Function to reset the game
 * 
 * @returns {JSX.Element}
 */


function GameReset({onReset}){
    return <Button onClick={onReset} color="bg-red-600">Play again</Button>
}

export default GameReset