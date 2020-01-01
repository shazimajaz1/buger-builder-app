import React from 'react'
import classes from './Button.css'
//This is a generic button that can be used throughout the project
const button = (props) => (
    <button className={[classes.Button, classes[props.btnType]].join(' ')} //Using the button styling conditionally.
        onClick={props.clicked}>{props.children}</button>
);

export default button;