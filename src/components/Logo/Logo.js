import React from 'react'
import logoImg from '../../assets/images/burger-logo.png' //This import will also optimize the image
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={logoImg} alt="BurgerLogo"/>
    </div>
);

export default logo;