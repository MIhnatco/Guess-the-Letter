import React from 'react'

/**
 * GameBoard component
 * 
 * Displays the main game interface, including the player's previous guesses, and remaining attempts
 * @param {Object} props - The props for the GameBoard component
 * @param {Array<string|null>}  props.guesses - Array representing the player's guesses
 * @param {number} props.attempts - The number of remaining attempts 
 * @returns 
 */

function GameBoard({guesses, attempts}){
    return (
        <>
        <p className='py-4'>
            Previous guesses: {
                guesses.map((guess, idx) => (
                    <span key={idx} className='px-2 font-bold'>{guess}</span>
                ))
            }
        </p>
        <p className='mg-4'>{`Remaining attempts: ${attempts}`}</p>
        </>
    )
}

export default GameBoard;