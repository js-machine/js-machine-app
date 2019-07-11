import React from 'react';
import './App.css';
import { Routes } from 'components/Routes';
import { NavBar } from 'components/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes />
      <NavBar />
    </div>
  );
};

export default App;
