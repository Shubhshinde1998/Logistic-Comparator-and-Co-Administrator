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
                <tr>
                    <th scope="col">FeedbackId</th>
                    <th scope="col">FeedbackDescription</th>
                    <th scope="col">CustomerId</th>
                    <th scope="col">CompanyId</th>
                   
                </tr>
            </thead>
            <tbody>
            {                    
                feedbackcus.map((v)=>
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