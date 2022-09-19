import React from 'react'
import {useEffect,useState} from 'react';

export default function ListFeedback() {
    const [feedback,setFeedback] = useState([]); 

    const getFeedback = () =>{
        let com= (JSON.parse(localStorage.getItem("company")).companyId)
        fetch("http://localhost:8080/"+com+"/getfeedbackresponse")
        .then(resp=>resp.json())
        .then(data=>setFeedback(data))
    }

    useEffect(() => {
        getFeedback();
       },[])

       return (        
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
                           
                          {/* <td><button className='btn btn-danger'onClick={() => { handleDelete(v.deliveryBoyId)}}>Delete</button></td>
                        */}
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