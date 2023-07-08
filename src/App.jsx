// import { useState } from 'react';
import React from 'react';
import './App.css';
import QuoteMachine from './components/quote_machine';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='container_App'>
      <h1>Quote Machine</h1>
      <QuoteMachine />
    </div>
  )
}

export default App;
