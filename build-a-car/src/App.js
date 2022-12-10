import React from 'react'
import app from "./App.css"
import Car from "./components/Car";
import Bicycle from './components/Bicycle';
import Truck from './components/Truck';
import Bus from './components/Bus';
import Skateboard from './components/Skateboard';

export default function App() {
  return (
    <div className="App">
    {/* <Car />  */}
    < Car numberOfWheels="4"/>
    <Bicycle numberOfWheels="2" />
    <Truck numberOfWheels="18"/>
    <Bus numberOfWheels="16"/>
    <Skateboard numberOfWheels="6"/>
    </div>
  
  );
}

// export default App;
