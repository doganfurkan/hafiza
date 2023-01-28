import React from 'react'
import { useSelector } from 'react-redux';

export default function Newgame() {
    const score = useSelector((item) => item.memory.score);

  return (
    <div id='newgame'>
        <div id="newgameic">
            <div id="newgameheader">Congratulations!</div>
            <div id="newgamecontent">You finished the game with {score} points</div>
            <div id="action">Do you want to play again? <br /><a href='/'>New Game</a></div>
        </div>
    </div>
  )
}
