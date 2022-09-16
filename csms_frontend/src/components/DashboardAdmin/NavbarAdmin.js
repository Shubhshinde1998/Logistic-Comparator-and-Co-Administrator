import React from 'react'
 import '../../styles/DashboardAdmin.css';
export const NavbarAdmin = () => {
    return (
            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div className="flex-row d-flex">
                    <button type="button" className="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/" title="Free Bootstrap 4 Admin Template">Dashboard</a>
                </div>
              
       </nav>
    )
}
export default NavbarAdmin