import React from 'react'
import { useEffect, useState } from "react";
import SidebarCompany from './SidebarCompany';
import NavbarCompany from './NavbarCompany';
import DashboardCom from './DashboardCom';

export default function DashboardCompany() {   

    return(
        <div>
                <NavbarCompany/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <SidebarCompany/>                  
                    <DashboardCom/>
             </div>
            </div>  
        </div>  

    );
}