import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <Link
        to='/surveys/new'
        className='btn btn-primary rounded-0 py-3 fixed-bottom'
      >
        CREATE A SURVEY
      </Link>
    </div>
  );
};

export default Dashboard;
