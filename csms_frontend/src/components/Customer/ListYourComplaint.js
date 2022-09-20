import React from 'react'
import {useEffect,useState} from 'react';

export default function ListYourComplaint() {
    const [complaintcus,setComplaint] = useState([]); 

    const getComplaint = () =>{
        let cus= (JSON.parse(localStorage.getItem("customer")).customerId)
        fetch("http://localhost:8080/"+cus+"/getcomplaintcustomer")
        .then(resp=>resp.json())
        .then(data=>setComplaint(data))
    }

    useEffect(() => {
        getComplaint();
       },[])

       return (        
        <div className="row ">
            <h3>Your Complaints</h3>
            <div className="">
            <div className="table-responsive">                        
            <table className="table table-striped">
            <thead className="thead-light">
            <tr>
                    <td scope="col"><b>Complaint Id</b></td>
                    <td scope="col"><b>Company Id</b></td>
                    <td scope="col"><b>Complaint Description</b></td>
                    <td scope="col"><b>Customer Id</b></td>
                    <td scope="col"><b>Complaint Status</b></td>
                    
                </tr>
            </thead>
            <tbody>
            {                    
                complaintcus.map((v)=>
                {
                    return(    
                                            
                        <tr scope="row" key={v.complaintId}>
                            <td>{v.complaintId}</td>
                            <td >{v.companyId}</td>
                            <td >{v.complaintDescription}</td>
                            <td >{v.customerId}</td>
                            <td >{v.complaintStatus}</td>                          
                          
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