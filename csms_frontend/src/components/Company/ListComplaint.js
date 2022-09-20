import React from 'react'
import {useEffect,useState} from 'react';

export default function ListComplaint() {
    const [complaint,setComplaint] = useState([]); 

    const getComplaint = () =>{
        let com= (JSON.parse(localStorage.getItem("company")).companyId)
        fetch("http://localhost:8080/"+com+"/getcomplaintresponse")
        .then(resp=>resp.json())
        .then(data=>setComplaint(data))
    }

    useEffect(() => {
        getComplaint();
       },[])

       return (        
        <div className="row ">
            <h3>Complaints</h3>
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
                complaint.map((v)=>
                {
                    return(                        
                        <tr scope="row">
                            <td >{v.complaintId}</td>
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