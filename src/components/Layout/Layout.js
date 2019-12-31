import React from 'react'
import classes from './Layout.css'
/*
    This component is a placeholder for all the components.
    Date: 12/31/2019
 */
const layout = (props) => (
    <React.Fragment>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;