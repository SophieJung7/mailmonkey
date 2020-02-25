import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../css/custom.css';

const Jumbo = () => {
  return (
    <Jumbotron className='jumbo'>
      <h1 className='jumbo-bigFont'>Get the answers you need</h1>
      <p className='jumbo-smallFont'>
        Get the feedback you need with a global leader in survey software.
      </p>
      <p className='mt-5'>
        <Link to='/signin' className='orange-button'>
          Get started
        </Link>
      </p>
    </Jumbotron>
  );
};

export default Jumbo;
