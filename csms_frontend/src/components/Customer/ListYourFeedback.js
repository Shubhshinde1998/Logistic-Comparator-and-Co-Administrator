import React from 'react'
import {useEffect,useState} from 'react';

export default function ListYourFeedback() {
    const [feedbackcus,setFeedback] = useState([]); 

    const getFeedback = () =>{
        let cus= (JSON.parse(localStorage.getItem("customer")).customerId)
        fetch("http://localhost:8080/"+cus+"/getfeedbackcustomer")
        .then(resp=>resp.json())
        .then(data=>setFeedback(data))
    }

    useEffect(() => {
        getFeedback();
       },[])

       return (        
        <div className="row ">
            <h3>Your Feedbacks</h3>
            <div className="">
            <div className="table-responsive">                        
            <table className="table table-striped">
            <thead className="thead-light">
                    <td scope="col"><b>Feedback Id</b></td>
                    <td scope="col"><b>Feedback Description</b></td>
                    <td scope="col"><b>Customer Id</b></td>
                    <td scope="col"><b>Company Id</b></td>
                    
            </thead>
            <tbody>
            {                    
                feedbackcus.map((v)=>
                {
                    return(                        
                        <tr scope="row" key={v.feedbackId}>
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
  )
}