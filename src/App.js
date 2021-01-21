import './App.css';
import React from 'react-dom'
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

    </div>
  );
}

export default App;
