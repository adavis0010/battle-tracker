import React from "react";
import '../App.css';

function AddCreature() {
    return (
        <div className='add-creature'>
            <div className='add-players'>
                <h1>Players</h1>
                    <div className='added-creature'>
                        <h4>Placeholder</h4>
                        <button id='plus-button'>+</button>
                        <h2>0 HP</h2>
                        <button id='minus-button'>-</button>
                        <button id='options-button'>...</button>
                    </div>
                <button>+</button>
            </div>
            <div className='add-enemies'>
                <h1>Enemies</h1>
                <div className='added-creature'>
                        <h4>Placeholder</h4>
                        <button id='plus-button'>+</button>
                        <h2>0 HP</h2>
                        <button id='minus-button'>-</button>
                        <button id='options-button'>...</button>
                    </div>
                <button>+</button>
            </div>
        </div>
    )
};

export default AddCreature;