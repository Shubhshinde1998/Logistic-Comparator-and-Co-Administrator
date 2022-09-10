import React from "react";
import {useState, useReducer} from 'react';
import "../styles/Registration.css";
const init = {
    
    Name: "",
    Email:"",
    City:"",
    Pincode:"",
    Contact:"",
    role:"",
    agree:false


}
const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val}; 
            case 'clear':return init   
    }
}

let CustomerReg =() =>
{
    
    const [cus, dispatch] = useReducer(reducer, init);
    const[agree,setAgree]=useState(false);
    const[book,setBook]=useState({});
   
    const sendData = (e) => {    
        e.preventDefault();
        if(agree)
        {
            const reqData = {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                    user:{         
                        user_Password: cus.password,
                        user_Role: cus.role,
                        user_Username: cus.customer_name
                     },
                    customer_Name: cus. customer_name,
                    customer_Emailid: cus. customer_email,
                    customer_City: cus.city,
                    customer_Pincode: cus.pincode,
                    customer_Contactno: cus.contact
                })    
            }
            
        fetch("http://localhost:8080/customerregister",reqData)
        .then(resp => (resp.ok ? resp : Promise.reject(resp)))
        .then(resp => resp.json())
        .then(data => setBook(data))   
        alert("successfull");
    
        }
        else{
            alert("accept terms and condition")
        }
    }
    return(
        <div className="register">
            <h1>Registration Form</h1>
            <form className="formreg">

            <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">Customer Name</label>
                <input type="text" id="form3Example3" className="form-control" name="Customer_Name" value={cus.customer_name}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'customer_name', val: e.target.value })} }
                     />                
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" for="form3Example4">Customer Email</label>
                <input type="email" id="form3Example4" className="form-control" name="Email" value={cus. customer_email}
                    onChange={ (e)=>{dispatch({type: 'update', field: ' customer_email', val: e.target.value })} }
                    />                
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" for="form3Example5">City</label>
                <input type="text" id="form3Example5" className="form-control" name="City" value={cus.city}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'city', val: e.target.value })} }
                    />                
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" for="form3Example6">Pincode</label>
                <input type="number" id="form3Example6" className="form-control" name="Pincode" value={cus.pincode}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'pincode', val: e.target.value })} }
                    />                
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" for="form3Example7">Contact No.</label>
                <input type="number" id="form3Example7" className="form-control" name="Contact" value={cus.contact}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'contact', val: e.target.value })} }
                    />                
            </div>
            
            <div className="form-outline mb-4">
                <label className="form-label" for="form3Example9">Role</label>
                <input type="number" id="form3Example9" className="form-control" name="role" value={cus.role}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'role', val: e.target.value })} }
                    />                
            </div>
            <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox"  id="form2Example33" name="agree" value={cus.agree}
                    onChange={ (e)=>{setAgree(e.target.checked)}} />
                <label className="form-check-label" for="form2Example33">Agree Terms and Conditions</label>
            </div>
            <button type="submit" id="btn1"className="btn btn-primary btn-block mb-4" value="Submit" 
                onClick = { (e)=>{ sendData(e) } }>Submit</button>
            <div className="text-center">
                <p>Already Have Account? <a href="/login">Login</a></p>
                </div>
            </form>
            
        </div>
    )
   
}
export default CustomerReg;