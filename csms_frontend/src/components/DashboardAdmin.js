import React from 'react'
import { useEffect, useState } from "react";

export default function DashboardAdmin() {
    const [customer,setCustomer] = useState([]);

    useEffect(()=>
    {
        fetch("http://localhost:8080/getallcompany")
        .then(resp=>resp.json())
        .then(data=>setCustomer(data))
    },[]);

    return(
    <div>
        <h1>DashboardAdmin</h1>

            <table className="table table-striped" style={{Color:"white",textAlign:"left",margin:"50px"}}>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact No.</th>
                    <th scope="col">City</th>
                    <th scope="col">Pincode</th>
                </tr>
            </thead>
            <tbody>
            {                    
                customer.map((v)=>
                {
                    return(                        
                        <tr scope="row">
                            <td >{v.company_Name}</td>
                            <td >{v.company_Emailid}</td>
                            <td >{v.company_Contactno}</td>
                            <td >{v.company_City}</td>
                            <td >{v.company_Pincode}</td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}