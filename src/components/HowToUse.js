import React from 'react';

function HowToUse() {
    return (
        <div className='how-to-use'>
            <div className='howto-text'>
                <h1>
                    How to Use
                </h1>
                <p>
                The Battle Tracker is an app for the forgetful DM. Do you keep forgetting to make saving throws at the beginning of the round? Are you worried about an accidental TPK because you haven’t been tracking your players’ HP? Is your party waiting in awkward silence while you struggle to subtract damage from all your enemies' and NPC's HP? Me too.</p>
                <br></br>
                <p>To start, click on the plus-sign to either add a creature from the Monster Manual, add a custom creature, or add an existing custom creature that you’ve already added. Once all of your players and enemies are on the board, simply use the plus or minus buttons to adjust a creature’s HP.</p>
                <br></br>
                <p>If a player or enemy has a status effect, click the “more” button to choose from a list of status effects. Click the “next round” button to roll the round over, and you will receive a reminder of every creature that currently has a status effect. Remember to uncheck them when they save!</p>
                <a href='./' target='_self' rel='noreferrer'>&#60; Back</a>
            </div>
        </div>
    )
}

export default HowToUse;