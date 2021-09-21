// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Device from './components/Device/Device';

function App() {
  const [steps, setSteps] = useState(0);
  const stepsHandle = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
    // console.log(steps);
  }
  useEffect(() => {
    console.log(steps)
  }, [steps])

  return (
    <div className="App">
      <h3>My Steps: {steps}</h3>
      <button onClick={stepsHandle}>Wolk</button>

      <Device name='Phone' steps={steps} price='13500' />
    </div>
  );
}

export default App;
