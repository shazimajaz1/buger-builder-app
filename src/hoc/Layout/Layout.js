import React, {Component} from 'react'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";

/*
    This component is a placeholder for all the components.
    Date: 12/31/2019
 */
class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    //This method when called closes the side drawer
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    toggleSideDrawerHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar toggle_click_handler={this.toggleSideDrawerHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>

                <main className={classes.Content}>
                    {this.children}
                </main>
                <BurgerBuilder/>

            </React.Fragment>
        )
            ;
    }
}

export default Layout;