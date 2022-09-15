import React from 'react'
import {useEffect,useState} from 'react';

export default function ListedCompany() {
    const [company,setCompany] = useState([]);  
   
   
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/${id}/deletecompany`, {method: 'DELETE'})
        .then(function(response) {
            if(response.status === 200) {
               alert("company delete succesfully");
               getCompany();
             };
            })          
    }
  
    const getCompany = () =>{
        fetch("http://localhost:8080/getallcompany")
        .then(resp=>resp.json())
        .then(data=>setCompany(data))
    }
    useEffect(() => {        
        getCompany();
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
                            <td >{v.companyName}</td>
                            <td >{v.companyEmail}</td>
                            <td >{v.companyContactNo}</td>
                            <td >{v.companyCity}</td>
                            <td >{v.companyPincode}</td>
                            <td><button className='btn btn-success'>Accept</button>
                            <button className='btn btn-danger' onClick={() => { handleDelete(v.companyId)}}>Delete</button></td>
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
