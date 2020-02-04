import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Link to="/surveys/new" className="btn btn-primary rounded-0">Create a survey</Link>
    </div>
  )
}

export default Dashboard;
