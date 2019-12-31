/*
This is the main container for the burger
 */
import React, {Component} from 'react'

class BurgerBuilder extends Component{
    render() {
        return(
            <React.Fragment>
                <div>Burger</div>
                <div>Build Controls</div>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;