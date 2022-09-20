import React from 'react'

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
const SidebarAdmin = () => {
    return (
         <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef",maxHeight:"100%"}}>
            
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-2 mt-3 ">
                <li className="nav-item mb-2 mt-3"><a className="nav-link text-secondary" href="#"><h5>Admin</h5></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/adminpanel/home">Home</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/adminpanel/company">Registered Company</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/adminpanel/pendingcompany">Pending Company</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/adminpanel/feedbacks">Feedback</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/adminpanel/complaints">Complaint</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/login" onClick={()=>{localStorage.removeItem("admin")}}>Logout</a></li>
            </ul>
       </div>
    )
}
 
export default SidebarAdmin
