import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyReg from './components/CompanyReg';
import Login from './components/Login';
import CustomerReg from './components/CustomerReg';
import Register from './components/Register';
import DashboardAdmin from './components/DashboardAdmin/DashboardAdmin';
import DashboardCompany from './components/DashboardCompany/DashboardCompany';
import DashboardCustomer from './components/DashboardCustomer/DashboardCustomer';
import ListedCompany from './components/Admin/ListedCompany';


function App() { 

  return (
   <div className="App" >
   <Router>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/company"  element={<CompanyReg/>} />
          <Route path="/customer"  element={<CustomerReg/>} />
          <Route path="/register"  element={<Register/>} />
          <Route path="/adminpanel"  element={<DashboardAdmin/>} />
          <Route path="/companypanel"  element={<DashboardCompany/>} />
          <Route path="/customerpanel"  element={<DashboardCustomer/>} />   
          <Route path="/listedCompanay"     element={ <ListedCompany/> }  /> 
        </Routes>
  </Router>
   </div>
  );
}

export default App;
