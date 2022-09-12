import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyReg from './components/CompanyReg';


import Login from './components/Login';
import CustomerReg from './components/CustomerReg';
import Register from './components/Register';
import DashboardAdmin from './components/Dashboard/DashboardAdmin';
import DashboardCompany from './components/Dashboard/DashboardCompany';
import DashboardCustomer from './components/Dashboard/DashboardCustomer';




function App() { 

  return (
   <div className="App" >
<<<<<<< HEAD
   {/* <Router>
=======
   <Router>
>>>>>>> 065f58233f23ebfa69749d883602c20cf6256a09
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/company"  element={<CompanyReg/>} />
          <Route path="/customer"  element={<CustomerReg/>} />
          <Route path="/register"  element={<Register/>} />
          <Route path="/adminpanel"  element={<DashboardAdmin/>} />
          <Route path="/companypanel"  element={<DashboardCompany/>} />
          <Route path="/customerpanel"  element={<DashboardCustomer/>} />
        </Routes>
<<<<<<< HEAD
  </Router>*/}
  <CustomerReg/>

  

=======
  </Router>
>>>>>>> 065f58233f23ebfa69749d883602c20cf6256a09
   </div>
  );
}

export default App;
