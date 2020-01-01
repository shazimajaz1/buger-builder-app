/*
This is the main container for the burger
This is a stateful component.
 */
import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6
};
class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable:false,
        purchasing:false
    };

    //This method update the purchasable state of the object
    updatePurchaseState(ingredients){
        // const ingredients = {
        //     ...this.state.ingredients
        // };
        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({purchasable: sum > 0})
    }
    //Handler 1
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        });

        //Update the purchasable
        this.updatePurchaseState(updatedIngredients);
    };

    //This method when called will remove the ingredient.
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if(oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const priceReduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceReduction;
            this.setState({
                totalPrice: newPrice,
                ingredients: updatedIngredients
            })
            //Update the purchasable method
            this.updatePurchaseState(updatedIngredients)
        }

    };
    //This method changes the state of the button
    purchaseHandler = () => {
        this.setState({purchasing:true})
    };

    //This method when called closes the modal from the screen
    purchaseCanceledHandler = () =>{
        this.setState({purchasing: false})
    };

    purchaseContinueHandler = () => {
        alert('You continue!');
    };


    //Render method is where the components of the burger will be renderd!
    render() {
        //Check for which button to disable
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0; //meaning that the value of the key is 0
        }


        //Return the JSX
        return(
            <React.Fragment>

                <Modal show={this.state.purchasing} modalClosed={this.purchaseCanceledHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  cancelOrdering={this.purchaseCanceledHandler}
                                  continueOrdering={this.purchaseContinueHandler}
                                    price = {this.state.totalPrice}/>
                </Modal>

                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}
                               ingredientRemoved={this.removeIngredientHandler}
                               disabled={disabledInfo}
                               price={this.state.totalPrice}
                               purchasable={this.state.purchasable}
                               orderButtonClicked={this.purchaseHandler}
                />

            </React.Fragment>
        );
    }
}

export default BurgerBuilder;