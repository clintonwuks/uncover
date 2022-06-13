import React from 'react';
import Navbar from './Navbar';
import CountdownTimer from './CountdownTimer';

function Header() {
    return (
        <div>
            <header>
                < Navbar />
            </header>

            <div className="container mx-auto text-center" >
            <CountdownTimer />
            </div>
        </div>
    );
}

export default Header;