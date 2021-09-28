import React from 'react';

function HowToUse() {
    return (
        <div className='how-to-use'>
            <div className='howto-text'>
                <h1>
                    How to Use
                </h1>
                {/* <p>
                The Battle Tracker is an app for the forgetful DM. Do you keep forgetting to make saving throws at the beginning of the round? Are you worried about an accidental TPK because you haven’t been tracking your players’ HP? Is your party waiting in awkward silence while you struggle to subtract damage from all your enemies' and NPC's HP? Me too.</p>
                <br></br>
                <p>To start, click on the plus-sign to either add a creature from the Monster Manual, add a custom creature, or add an existing custom creature. Once all of your players and enemies are on the board, simply use the plus or minus buttons to adjust a creature’s HP.</p>
                <br></br>
                <p>If a player or enemy has a condition, click the “more” button to choose from a list of conditions. Click the “next round” button to roll the round over, and you will receive a reminder of every creature that currently has a condition. Remember to uncheck them when they save!</p> */}
                <p>
                The Battle Tracker is an app that keeps track of all of your players on the board for you.</p>
                <br></br>
                <p>To start, click on the plus-sign to either add a creature from the Monster Manual or add a custom creature. Once on the board, you can delete them if you wish, or use the reset button to remove all of the creatures at once. Use the round counter at the top of the application to keep track of how many rounds have gone by.</p>
                <br></br>
                <p>Battle Tracker is still in active developement. Please look forward to future features! If you happen to find a bug while using this application, please feel free to contact me <a id="email" href="mailto:sadavis0010@gmail.com ?subject = 'Bug Report' body = Message">here</a>.</p>
                <a href='./' target='_self' rel='noreferrer'>&#60; Back</a>
            </div>
        </div>
    )
}

export default HowToUse;