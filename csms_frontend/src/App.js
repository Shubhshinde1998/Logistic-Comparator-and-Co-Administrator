import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import CompanyReg from './components/CompanyReg';
import CustomerReg from './components/CustomerReg';


function App() { 

  return (
   <div className="App" >
   <Router>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/register"  element={<CompanyReg/>} />
          <Route path="/customer"  element={<CustomerReg/>} />
        </Routes>
  </Router>

   </div>
  );
}

export default App;
