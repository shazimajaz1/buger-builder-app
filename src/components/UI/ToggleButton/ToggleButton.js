import React from 'react'
import classes from './ToggleButton.css'

const toggleButton = (props) => (
    <div className={classes.DrawerToggle} onClick={props.toggle_clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default toggleButton;