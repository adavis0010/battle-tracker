import React, {useState} from 'react';
import '../App.css';

function RoundCounter() {
    const [value, setValue] = useState(1)
    let incrementRound = () => {
            return setValue(value + 1)
    }
    return (
        <div className='round-counter'>
            <h2>Round {value}</h2>
            <button id='next-round' onClick={incrementRound}>Next Round</button>
        </div>
    )
};

export default RoundCounter;