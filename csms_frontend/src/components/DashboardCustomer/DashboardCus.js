import React from 'react'
import {Link, Route, Router, Routes} from 'react-router-dom';
import { useEffect, useState } from "react";
import Complaint from '../Customer/Complaint';
import Feedback from '../Customer/Feedback';
import ListYourFeedback from '../Customer/ListYourFeedback';
import OrderForm from '../Customer/OrderForm';
import OrderInvoice from '../Customer/OrderInvoice';

export default function DashboardCus() {

   /* const [customer,setCustomer] = useState([]);

    useEffect(()=>
    {
        fetch("http://localhost:8080/getallcustomer")
        .then(resp=>resp.json())
        .then(data=>setCustomer(data))
    },[]);*/

    return(
    <div className="col main pt-5 mt-3">
{/*
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
                            <td >{v.customer_Name}</td>
                            <td >{v.customer_Emailid}</td>
                            <td >{v.customer_Contactno}</td>
                            <td >{v.customer_City}</td>
                            <td >{v.customer_Pincode}</td>
                        </tr>
                        )
                    })
                }
                </tbody>
                
            <hr/>
            </table> 
            <Link to="/orderform" element={<OrderForm/>} />
            
            <Feedback/>
            <hr/>
            <Complaint/>
            <Router>
                <Routes>
                <Route path='/orderform' element={<OrderForm/>}/> 
                </Routes>          
            </Router>*/}
            <OrderInvoice/>
            <hr></hr>
            <OrderForm/>
            <hr/>
<<<<<<< HEAD
         <Feedback/>
            <hr/>
            <Complaint/>
=======
            <ListYourFeedback/>
>>>>>>> c43cc97e3945ae9e57febbed955d4da103904304
        </div>
    )
}