import React from 'react'
const SidebarCompany = () => {
    return (
         <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-2 mt-3 ">
            <li className="nav-item mb-2 mt-3"><a className="nav-link text-secondary" href="#"><h5>Welcome {(JSON.parse(localStorage.getItem("company")).companyName)}</h5></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/companypanel/home">Home</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/companypanel/deliveryboys">Delivery Boy</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/companypanel/vehicles">Vehicles</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/companypanel/categoryprice">Category Pricing</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/companypanel/feedback">Feedback</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/companypanel/complaint">Complaint</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/login" onClick={()=>{localStorage.removeItem("company")}}>Logout</a></li>
            </ul>
       </div>
    )
}
 
export default SidebarCompany
