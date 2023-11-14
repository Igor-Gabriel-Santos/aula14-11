import React, {useState} from 'react'
import CalculadoraDeSoma from './components /soma';
import CalculadoraDeSub from './components /sub';
import './App.css';

function App() {
    
  return (
    <div className="App">
      
        <CalculadoraDeSoma/>
        <CalculadoraDeSub/>
    </div>
  );
}

export default App;