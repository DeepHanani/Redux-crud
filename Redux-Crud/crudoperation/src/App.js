
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import AppoimentRegister from './components/AppoimentRegister';
import Login from './components/Login';
import Appointment from './components/Appointment';

function App() {
  return (
    <div className="App">

<Routes>
        <Route path="/" element={ <AppoimentRegister/>}></Route>
        <Route path="/Login" element={ <Login/>}></Route>
        <Route path="/Appoiment" element={ <Appointment/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
