import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello Developer 👋</h1>
      <button onClick={() => navigate('/')}>logout</button>
    </div>
  );
};

export default Dashboard;
