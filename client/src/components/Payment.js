import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";
import Button from "react-bootstrap/Button";

class Payment extends Component {
  render() {
    return (
      <StripeCheckout
        name="Survey Monkey"
        description="$5 for 5 email credits"
        amount={500}
        token={token => this.props.handleStripeToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button className="jumbo-button credit-button">ADD CREDITS</Button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payment);
