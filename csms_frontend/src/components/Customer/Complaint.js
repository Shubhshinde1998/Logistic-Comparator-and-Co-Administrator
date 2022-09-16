import React from "react";
import {useState, useReducer} from 'react';
import "../../styles/Registration.css";

const init = {      
  complaint:""
}
const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val}; 
        case 'clear':
            return init   
    }
}

export default function Complaint() {
    const [cus, dispatch] = useReducer(reducer, init);
    
    let customerName= (JSON.parse(localStorage.getItem("customer")).customerName)
    const sendData = (e) => {    
        //e.preventDefault();
        let customer= (JSON.parse(localStorage.getItem("customer")).customerId)
        
            const reqData = {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                   
                    vehiclesDetailsNo: cus.feedback,
                    customerId: customer                    
                })    
            }

            
        fetch("http://localhost:8080/feedback",reqData)
        .then(function(response) {
            if(response.status === 200) {
               alert("Complaint send succesfully");
             }
             
            }) 
       
    }

    return (
        <div className="register">
        <h1>Complaint</h1>
        <form className="formreg">
       <h6>Customer Name:</h6>
            <div className="form-outline mb-4">
            <input type="text" id="form3Example4" className="form-control"  name="complaint" readOnly={true} value={customerName}
                onChange={ (e)=>{dispatch({type: 'update', field: 'complaint', val: e.target.value })} }
                />                
                </div>   
                <h6>Complaint:</h6>         
        <div className="form-outline mb-4">
            <input type="textarea" id="form3Example4" className="form-control" placeholder="Write Your Complaint Here" name="complaint"  value={cus.complaint}
                onChange={ (e)=>{dispatch({type: 'update', field: 'complaint', val: e.target.value })} }
                />                
        </div>
        
        <button type="submit" id="btn1"className="btn btn-primary btn-block mb-4" value="Submit" 
            onClick = { (e)=>{ sendData(e) } }>Submit</button>
        </form>        
    </div>
  )
    
}
