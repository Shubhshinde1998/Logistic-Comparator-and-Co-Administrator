import React from "react";
import {useState, useReducer,useEffect} from 'react';
import "../../styles/Registration.css";

const init = {      
  complaint:null
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
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(cus);
        }
      }, [formErrors]);

      const validate = (values) => {
        const errors = {};
        if (!values.complaint) {
          errors.complaint = "Field is required!";
        }         
        return errors;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(cus));
        setIsSubmit(true);
        sendData(e);
      };

    let customerName= (JSON.parse(localStorage.getItem("customer")).customerName)
    const sendData = (e) => {    
        //e.preventDefault();
        //console.log(e);
        let customerId= (JSON.parse(localStorage.getItem("customer")).customerId)
        console.log(customerId);
            const reqData = {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                   
                    complaintDescription: cus.complaint,
                    customerId: customerId  ,
                    complaintStatus: 0                 
                })    
            }
            
            
        fetch("http://localhost:8080/complaintregister",reqData)
        .then(function(response) {
            if(response.status === 200) {
               alert("Complaint send succesfully");
             }
             else
             alert("unable to register complaint");             
            }) 
       
    }

    return (
        <div className="register">
        <h1>Complaint</h1>
        <form className="formreg">
       <h6>Customer Name:</h6>
            <div className="form-outline mb-4">
            <input type="text" id="form3Example4" className="form-control"  name="complaint" readOnly={true} value={customerName}
                
                />                
                </div>   
                <h6>Complaint:</h6>         
        <div className="form-outline mb-4">
            <input type="textarea" id="form3Example4" className="form-control" placeholder="Write Your Complaint Here" name="complaint"  value={cus.complaint}
                onChange={ (e)=>{dispatch({type: 'update', field: 'complaint', val: e.target.value })} }
                />
        <p className="text-danger">{formErrors.complaint}</p>                 
        </div>
        
        <button type="submit" id="btn1"className="btn btn-primary btn-block mb-4" value="Submit" 
            onClick = { (e)=>{ handleSubmit(e) } }>Submit</button>
        </form>        
    </div>
  )
    
}
