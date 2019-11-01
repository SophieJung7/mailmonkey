import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "../css/custom.css";

const Jumbo = () => {
  return (
    <Jumbotron className="jumbo">
      <h1 className="jumbo-bigFont">Get the answers you need</h1>
      <p className="jumbo-smallFont">
        Get the feedback you need with a global leader in survey software.
      </p>
      <p>
        <Button className="jumbo-button">Get started</Button>
      </p>
    </Jumbotron>
  );
};

export default Jumbo;
