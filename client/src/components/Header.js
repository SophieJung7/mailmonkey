import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Payment from "./Payment";

class Header extends Component {
  renderLogin() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Nav.Link className="nav-link" href="/auth/google">
            Login With Google
          </Nav.Link>
        );
      default:
        return (
          <div>
            <Payment />
            <Nav.Link className="nav-link d-inline ml-3">
              CREDITS: {this.props.auth.credits}
            </Nav.Link>
            <Nav.Link className="nav-link d-inline ml-3" href="/api/logout">
              SIGN OUT
            </Nav.Link>
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        <div>
          <Navbar
            expand="lg"
            className="navbar navbar-expand-lg navbar-dark navbar-custom navbar-fixed-top"
          >
            <Container>
              <LinkContainer to={this.props.auth ? "/surveys" : "/"}>
                <Navbar.Brand className="navbar-brand">
                  Survey Monkey
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="collapse navbar-collapse"
              >
                <Nav className="navbar-nav ml-auto">{this.renderLogin()}</Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
