/*
    Developed by Shazim Ajaz by following the course tutorial.
    Date 12/31/19

    This is the root file for Burger Builder Project. All the components must
    be nested in this file for them to be rendered to the DOM.

    TODO: Update this section as you go!
 */

import React, {Component} from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
class App extends Component {

    //Lifecycle method 1: will render the components.
    render() {
        return (
            <div>
                <Layout>
                    <BurgerBuilder/>
                </Layout>
            </div>
        );
    }
}

export default App;
