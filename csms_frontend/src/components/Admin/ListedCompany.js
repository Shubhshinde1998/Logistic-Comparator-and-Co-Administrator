import React from 'react'
import {useEffect,useState} from 'react';

export default function ListedCompany() {
    const [company,setCompany] = useState([]);  
   
    useEffect(() => {
        fetch("http://localhost:8080/getallcompany")
        .then(resp=>resp.json())
        .then(data=>setCompany(data))
       },[])

    return (
        
        <div className="row ">
            <div className="">
              <h5 className="mt-3 mb-3 text-secondary">
               Check More Records of Customer
              </h5>
        <div className="table-responsive">                        
            <table className="table table-striped">
            <thead className="thead-light">
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
                company.map((v)=>
                {
                    return(                        
                        <tr scope="row">
                            <td >{v.company_Name}</td>
                            <td >{v.company_Emailid}</td>
                            <td >{v.company_Contactno}</td>
                            <td >{v.company_City}</td>
                            <td >{v.company_Pincode}</td>
                            <td><button className='btn btn-success'>Accept</button></td>
                            <td><button className='btn btn-danger'>Delete</button></td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
                </div>
            </div>
            
        </div>
  )
}
