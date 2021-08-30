import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

function Header() {
    return (
        <div className='ui-header'>
            <h1>Battle Tracker</h1>
            <div className='direc-links'>
                <Link to="/how-to-use">How to Use</Link>
                <p>|</p>
                <a href='https://adavis0010.github.io/' target='_blank' rel='noreferrer'>More by Me</a>
            </div>
        </div>
    );
}

export default (Header);