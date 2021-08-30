import React from 'react';
import RoundCounter from './RoundCounter';
import AddCreature from './AddCreature';

function Homepage() {
    return(
        <div className = 'home-page'>
            <RoundCounter />
            <AddCreature />
        </div>
    )
}

export default Homepage;