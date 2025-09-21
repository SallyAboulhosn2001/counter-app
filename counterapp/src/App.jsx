import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterButton from './counterbtn';


function App() {
  const [count, setCount] = useState(0)
  const increment = () => 
    {if (count < max)
      setCount(count + 1);
    else
      alert("Maximum limit reached");}
  const decrement = () => {
    if (count > min) 
      setCount(count - 1);
    else
      alert("Minimum limit reached");
  }
  const reset = () => setCount(0);
  const min = 0;
  const max = 10;
  return (
    <div className='counter-container'>
      <h1 style={{ color: '#5c1f1f' }}>Counter: {count}</h1>
      <CounterButton onClick={increment} label="+" />
      <CounterButton onClick={decrement} label="-" />
      <CounterButton onClick={reset} label="Reset" />
    </div>
  );
}

export default App
