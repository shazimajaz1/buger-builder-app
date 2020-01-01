import React, {Component} from 'react'
import Button from '../../UI/Button/Button'

//This file returns structured components for the order
class OrderSummary extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Summary Updates")
    }

    render() {



        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igkey => {
                return (
                    <li key={igkey}>
                        <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {this.props.ingredients[igkey]}
                    </li>)
            });

        return (
            <React.Fragment>
                <h3>Your Order:</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancelOrdering}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continueOrdering}>CONTINUE</Button>

            </React.Fragment>
        )
    }


}

export default OrderSummary;
