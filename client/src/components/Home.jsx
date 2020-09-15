import React, { useState } from 'react';
import '../stylesheets/style.css'
import Game from './Game';

const Home = () => {
    const [start, setstart] = useState(false);
    if (start === false) {
        return (
            <>
                <div className="main_container">
                    <button onClick={() => {
                        setstart(true);
                    }}>PLAY</button>
                </div>
            </>
        );
    } else {
        return (
            <Game />
        )
    }

}

export default Home;
