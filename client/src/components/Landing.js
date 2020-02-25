import React from 'react';
import { connect } from 'react-redux';
import Jumbo from './Jumbo';
import Dashboard from './Dashboard';

const Landing = ({ auth }) => {
  if (auth) {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
  return (
    <div>
      <Jumbo />
    </div>
  );
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Landing);
