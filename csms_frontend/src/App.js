import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import CompanyReg from './components/CompanyReg';


function App() { 

  return (
   <div className="App" >
    <Router>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/register"  element={<CompanyReg/>} />
        </Routes>
    </Router>
   </div>
  );
}

export default App;
