import React from 'react';
import RoundCounter from './RoundCounter';
import AddCreature from './AddCreature';
import ResetButton from './ResetButton'

function Homepage() {
    return(
        <div className = 'home-page'>
            <RoundCounter />
            <AddCreature />
            <ResetButton />
        </div>
    )
}

export default Homepage;