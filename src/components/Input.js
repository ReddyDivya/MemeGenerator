import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.text}</label>
            <input
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                className={`${props.bottomText == 'true' ? classes.bottomText : ''}
                 ${props.isInValid == true ? classes.invalid : ''}`}
            />
        </div>
    )
}

export default Input
