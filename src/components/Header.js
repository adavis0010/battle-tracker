import React from 'react';
import '../App.css';

function Header() {
    return (
        <div className='ui-header'>
            <h1>Battle Tracker</h1>
            <div className='direc-links'>
                <a href='howToUse.html'>How to Use</a>
                <p>|</p>
                <a href='https://adavis0010.github.io/' target='_blank' rel='noreferrer'>More by Me</a>
            </div>
        </div>
    );
}

export default Header;