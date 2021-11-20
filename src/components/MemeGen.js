import React, { useState, useEffect } from 'react';
import Input from './Input';
import classes from './MemeGen.module.css';

const MemeGen = () => {
    const [top, setTopText] = useState('');
    const [bottom, setBottomText] = useState('');
    const [AllMemes, setAllMemes] = useState([]);
    const [randomMemeSrc, setRandomMemeSrc] = useState('');
    const [isInValid, setIsInValid] = useState(false);

    const onTopChange = (event) => {
        //triggers when top text changes
        setTopText(event.target.value);
    }

    const onBottomChange = (event) => {
        //triggers when bottom text changes
        setBottomText(event.target.value);
    }

    const onSubmitHndlr = (event) => {
        //on form submit
        event.preventDefault();

        if (top === '') {
            setIsInValid(true);
            console.log('invalid ' + isInValid);
            return;
        }

        if (bottom === '') {
            setIsInValid(true);
            return;
        }


        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data;
                setAllMemes(memes);
            })

        let random = Math.floor(Math.random() * AllMemes.length);
        if (random !== 0) {
            setRandomMemeSrc(AllMemes[random].url);
        }
    }

    return (
        <main>
            <form onSubmit={onSubmitHndlr}>
                <div>
                    <Input type="text"
                        text="Top"
                        value={top}
                        id="top-text"
                        placeholder="Top text here"
                        onChange={onTopChange}
                        isInValid={isInValid}
                    />
                </div>
                <br />
                <div>
                    <Input
                        type="text"
                        text="Bottom"
                        value={bottom}
                        id="bottom-text"
                        placeholder="Bottom text here"
                        onChange={onBottomChange}
                        isInValid={isInValid}
                        bottomText="true"
                    />
                </div>
                <div>
                    <input className={classes.button} type="submit" value="Generate Meme" />
                </div>
                {
                    (randomMemeSrc && <div className={classes.meme}>
                        <h2 className={classes.top}>{top}</h2>
                        <img className={classes.image} src={randomMemeSrc} alt="" />
                        <h2 className={classes.bottom}>{bottom}</h2>
                    </div>)
                }

            </form>
        </main>
    )
}

export default MemeGen
