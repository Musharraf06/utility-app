import React, { useEffect } from 'react';
import '../stylesheets/game.css';

//left : 469px
//top: 436px
//right: -469px
//bottom: -436px
const Game = () => {
    // const [snakepos, setpos] = useState(0);
    // var snakeleft = 0;   
    var snaketop = 0;
    const start = () => {
        var snake = document.getElementById("snake");
        // var game_board = document.getElementById("game_board");
        document.addEventListener("keyup", (event) => {
            if (event.which === 115 || event.keyCode === 83) {
                snaketop += 2;
                snake.style.top = snaketop + "px";
                if (snaketop === 434) {
                    snaketop = 0;
                }
            }
        })
        // var food = document.getElementById("food");
        // var leftpos = Math.floor(Math.floor((Math.random() * 470) + 1))
        // var toppos = Math.floor(Math.floor((Math.random() * 420) + 1))
        // food.style.left = leftpos + "px";
        // food.style.top = toppos + "px";

        // snake.style.left = snakepos + "px";
        // if (snakepos === 468) {
        //     snakepos = 0;
        // }
    }
    useEffect(() => {
        setInterval(start, 40)
    })
    return (
        <div className="container">
            <div id="game_board" className="game-board">
                <div id="snake" className="snake"></div>
                <div id="food" className="food"></div>
                <button onClick={start}>start</button>
            </div>
            <div className="details" id="details"></div>
        </div>
    )
}

export default Game;