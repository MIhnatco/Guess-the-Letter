import React from 'react'

import Button from "../Button";

/**
 * The GameReset component 
 * Reset the game and play again
 * 
 * @returns {JSX.Element}
 */


function GameReset({onReset}){
    return <Button onClick={onReset} color="bg-red-600">Play again</Button>
}

export default GameReset