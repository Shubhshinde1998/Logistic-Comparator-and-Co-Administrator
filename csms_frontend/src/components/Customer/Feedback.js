import React from "react";
import {useState, useReducer} from 'react';
import "../../styles/Registration.css";

const init = {      
  feedback:""
}
const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val}; 
        case 'clear':
            return init   
    }
}

export default function Feedback() {
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
               alert("Feedback send succesfully");
             }
             else
                alert("unable to add vehicle")
            }) 
       
    }

    return (
        
        <div className="register">
            <h1>Feedback Form </h1>
            <h6>Customer Name:</h6>
            <div className="form-outline mb-4">
            <input type="text" id="form3Example4" className="form-control"  name="feedback" readOnly={true} value={customerName}
                onChange={ (e)=>{dispatch({type: 'update', field: 'feedback', val: e.target.value })} }
                />                
                </div>   
        
        <form className="formreg">
        <h6>Feedback:</h6>            
        <div className="form-outline mb-4">
            <input type="textarea" id="form3Example4" className="form-control" placeholder=" Write your feedback here" name="feedback" value={cus.feedback}
                onChange={ (e)=>{dispatch({type: 'update', field: 'feedback', val: e.target.value })} }
                />                
        </div>
        
        <button type="submit" id="btn1"className="btn btn-primary btn-block mb-4" value="Submit" 
            onClick = { (e)=>{ sendData(e) } }>Submit</button>
        </form>        
    </div>
  )
    
}
