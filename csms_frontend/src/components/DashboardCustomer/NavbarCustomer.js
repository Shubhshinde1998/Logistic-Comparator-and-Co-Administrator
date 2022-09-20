import React from 'react'
export const NavbarCustomer = () => {
    return (
            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div className="flex-row d-flex " style={{marginLeft:"40px"}}>                    
                    <a className="navbar-brand" href="/customerpanel" >Dashboard</a>
                </div>
            
       </nav>
    )
}
export default NavbarCustomer