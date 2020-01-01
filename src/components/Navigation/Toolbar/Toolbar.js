import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import ToggleButton from '../../UI/ToggleButton/ToggleButton'
const toolbar = (props) => (
    <header className={classes.Toolbar}>

        <ToggleButton toggle_clicked={props.toggle_click_handler}/>
        <Logo height="80%"/>

        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;