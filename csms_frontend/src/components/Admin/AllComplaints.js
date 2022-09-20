import React from 'react'
import {useEffect,useState} from 'react';
import { render } from 'react-dom';

export default function AllComplaint() {
    const [complaint,setComplaint] = useState([]); 
    const [valueCompany, setValueCompany] = useState([]);
    const [company,setCompany] = useState([]); 

    const getComplaint = (com) =>{
     //  let com= (JSON.parse(localStorage.getItem("company")).companyId)
        fetch("http://localhost:8080/"+com+"/getcomplaintresponse")
        .then(resp=>resp.json())
        .then(data=>setComplaint(data))
    }

    const getCompany = () =>{
        fetch("http://localhost:8080/approvedcompany")
        .then(resp=>resp.json())
        .then(data=>setCompany(data))
     }
  

    useEffect(() => {
        getCompany();
        getComplaint(valueCompany);
       },[valueCompany]);

       const handleCompanyChange =  (e) => {
        setValueCompany(e.target.value);
      };

       return (      
        <div className="form-outline mb-4">
        <lable><b>Select Company:</b></lable>
        <select id="companyname" name="companyname" className="form-control" value={valueCompany} onChange={handleCompanyChange}>
           <option value="">Company Names :</option>
           {company.map((company) => (
           <option value={company.companyId}>{company.companyName}</option>
           ))}
        </select>
       {/* <p>{`You selected ${valueCompany}`}</p>  */} 
        <div className="row ">
            <h3>Compaints</h3>
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
        </div>
    )
}