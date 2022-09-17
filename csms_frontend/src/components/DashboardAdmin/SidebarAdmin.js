import React from 'react'

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
const SidebarAdmin = () => {
    return (
         <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef",maxHeight:"100%"}}>
            
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li className="nav-item mb-2 mt-3"><a className="nav-link text-secondary" href="#"><h5>Admin</h5></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fas fa-user font-weight-bold"></i> <span className="ml-3">Home</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Listed Company</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fas fa-file-export font-weight-bold"></i><span className="ml-3">Pending Request</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Feedback</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fas fa-atom font-weight-bold"></i> <span className="ml-3">Complaint</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/login" onClick={()=>{localStorage.removeItem("admin")}}><i className="far fa-folder font-weight-bold"></i> <span className="ml-3">Logout</span></a></li>
            </ul>
       </div>
    )
}
 
export default SidebarAdmin
