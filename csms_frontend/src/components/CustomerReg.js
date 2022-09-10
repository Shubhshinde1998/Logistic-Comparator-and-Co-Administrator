import React from "react";
import {useState, useReducer} from 'react';
import "../styles/Registration.css";
const init = {
    
    name : "",
    email :"",
    city :"",
    pincode :"",
    contact :"",
    password :"",
    role :"3",
    agree :false
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
                        user_Password : cus.password,
                        user_Role : cus.role,
                        user_Username : cus.name
                     },
                    customer_Name : cus.name,
                    customer_Emailid : cus.email,
                    customer_City : cus.city,
                    customer_Pincode : cus.pincode,
                    customer_Contactno : cus.contact

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
                <input type="text" id="form3Example3" className="form-control" placeholder="Name" name="Customer_Name" value={cus.name}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'name', val: e.target.value })} }
                     />                
            </div>
            <div className="form-outline mb-4">
                <input type="email" id="form3Example4" className="form-control" placeholder="Email"name="email" value={cus.email}
                    onChange={ (e)=>{dispatch({type: 'update', field: ' email', val: e.target.value })} }
                    />                
            </div>
            <div className="form-outline mb-4">
                <input type="text" id="form3Example5" className="form-control" placeholder="City" name="city" value={cus.city}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'city', val: e.target.value })} }
                    />                
            </div>
            <div className="form-outline mb-4">
                <input type="number" id="form3Example6" className="form-control" placeholder="Pincode"name="pincode" value={cus.pincode}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'pincode', val: e.target.value })} }
                    />                
            </div>
            <div className="form-outline mb-4">
                <input type="number" id="form3Example7" className="form-control" placeholder="Contact No."name="contact" value={cus.contact}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'contact', val: e.target.value })} }
                    />                
            </div>
            <div className="form-outline mb-4">
                <input type="password" id="form3Example8" className="form-control" placeholder="Password"name="password" value={cus.password}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'password', val: e.target.value })} }
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