import React from 'react';
import './App.css';
import Nav from './nav/Nav'
import './nav/nav.css'

function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Floating NavBar</h1>
      <Nav/>
    </div>
  );
}

export default App;
