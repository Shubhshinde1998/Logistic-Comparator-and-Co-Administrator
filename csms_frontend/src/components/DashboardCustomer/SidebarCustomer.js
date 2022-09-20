import React from 'react';

const SidebarCustomer = () => {
    return (
         <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-2 mt-3 ">
            <li className="nav-item mb-2 mt-3"><a className="nav-link text-secondary" href="#"><h5>Welcome {(JSON.parse(localStorage.getItem("customer")).customerName)}</h5></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/customerpanel/home">Home</a></li>                
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/customerpanel/orderform">New Courier Order</a></li>              
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/customerpanel/trackingorder">Tracking Order</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/customerpanel/orderinvoice">Order Invoice</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/customerpanel/feedback">Feedback</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/customerpanel/complaint">Complaint</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/login" onClick={()=>{localStorage.removeItem("customer")}}>Logout</a></li>
            </ul>
       </div>
    )
}
 
export default SidebarCustomer
