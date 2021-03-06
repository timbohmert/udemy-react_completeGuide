import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // this could be functional component, does not need to be a class
  
  componentDidUpdate() {
    console.log('[OrderSummary] did update');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          Total Price: <strong>${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.cancelBtn}>
          CANCEL ORDER
        </Button>
        <Button btnType="Success" clicked={this.props.checkoutBtn}>
          CHECKOUT
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
