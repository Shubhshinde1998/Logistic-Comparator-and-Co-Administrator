import React from 'react'
import {useEffect,useState} from 'react';

export default function AllFeedback() {
    const [feedback,setFeedback] = useState([]); 
    const [valueCompany, setValueCompany] = useState(0);
    const [company,setCompany] = useState([]); 

    const getFeedback = () =>{
     //  let com= (JSON.parse(localStorage.getItem("company")).companyId)
        fetch("http://localhost:8080/"+valueCompany+"/getfeedbackresponse")
        .then(resp=>resp.json())
        .then(data=>setFeedback(data))
    }

    const getCompany = () =>{
        fetch("http://localhost:8080/approvedcompany")
        .then(resp=>resp.json())
        .then(data=>setCompany(data))
     }
  

    useEffect(() => {
        getCompany();
        getFeedback();
       },[])

       const handleCompanyChange =  (e) => {
        setValueCompany(e.target.value);
        getFeedback();
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
            <h3>Feedback</h3>
            <div className="">
            <div className="table-responsive">                        
            <table className="table table-striped">
            <thead className="thead-light">
                <tr>
                    <th scope="col">FeedbackId</th>
                    <th scope="col">FeedbackDescription</th>
                    <th scope="col">CustomerId</th>
                    <th scope="col">CompanyId</th>
                    
                </tr>
            </thead>
            <tbody>
            {                    
                feedback.map((v)=>
                {
                    return(                        
                        <tr scope="row">
                            <td >{v.feedbackId}</td>
                            <td >{v.feedbackDiscription}</td>
                            <td >{v.customerId}</td>
                            <td >{v.companyId}</td>
                           
                        
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