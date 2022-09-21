import React from 'react'
 import '../../styles/DashboardAdmin.css';
export const NavbarAdmin = () => {
    return (
            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div className="flex-row d-flex" style={{marginLeft:"40px"}}>
                    <a className="navbar-brand" href="/adminpanel/home">Dashboard</a>
                </div>              
       </nav>
    )
}
export default NavbarAdmin