import React, {Component} from 'react'
import classes from './BurgerIngredient.css'
import PropTypes from 'prop-types'

/*
    This functions returns the new JSX for the ingredients.
 */
class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        //Select which ingredient to render based on the string passed.
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>

                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            default:
                ingredient = null;

        }

        return ingredient;
    }
}

//Confirm the tpe of passed parameters to ensure that no other value other than
//a string is passed.
//This will throw a warning indicating to the user that the the type of prop passed
//should be a string.
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};
export default BurgerIngredient;