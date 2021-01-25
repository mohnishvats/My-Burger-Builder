import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  meat: 1.5,
  bacon: 0.7,
  cheese: 0.9,
};
class burgerbuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0,
    },
    total_price: 4,
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const UpdatedCount = oldCount + 1;
    const UpdatedIngredients = {
      ...this.state.ingredients,
    };
    UpdatedIngredients[type] = UpdatedCount;
    const new_price = this.state.total_price + INGREDIENTS_PRICES[type];
    this.updatePurchaseState(UpdatedIngredients);
    this.setState({ ingredients: UpdatedIngredients, total_price: new_price });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const UpdatedCount = oldCount - 1;
    const UpdatedIngredients = {
      ...this.state.ingredients,
    };

    UpdatedIngredients[type] = UpdatedCount;
    const new_price = this.state.total_price - INGREDIENTS_PRICES[type];
    this.updatePurchaseState(UpdatedIngredients);
    this.setState({ ingredients: UpdatedIngredients, total_price: new_price });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>

        <Burger ingredients={this.state.ingredients} />

        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          ordered={this.purchaseHandler}
          purchasable={this.state.purchasable}
          price={this.state.total_price}
        />
      </Aux>
    );
  }
}

export default burgerbuilder;
