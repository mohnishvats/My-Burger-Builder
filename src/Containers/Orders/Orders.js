import React, { Component } from "react";

import Order from "../../Components/Order/Order";
import axios from "../../axios-orders";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentWillMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrder = [];

        this.setState({ loading: false });

        for (let key in res.data) {
          fetchedOrder.push({ ...res.data[key], id: key });
        }
        this.setState({ orders: { fetchedOrder } });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    console.log("1" + this.state.orders);
    return (
      <div>
        {Object.keys(this.state.orders).map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default WithErrorHandler(Orders, axios);
