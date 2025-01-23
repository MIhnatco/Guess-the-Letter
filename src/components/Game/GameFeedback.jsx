import React from 'react'

/**
 * Component to display feedback for player's guess
 * @param {string} solution - feedback 
 * @returns {JSX.Element}
 */

function GameFeedback({solution}){
    return <h2 className='font-semibold m-8'>{solution}</h2>
}

export default GameFeedback;