import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                alt="Meme"
            />
            <h1>Meme Generator</h1>
        </header>
    )
}

export default Header
