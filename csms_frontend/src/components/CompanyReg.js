
import React from "react";
import {useState, useReducer} from 'react';
import "../styles/Registration.css";
import { useNavigate } from 'react-router-dom';
const init = {
    
   company_name: null,
   company_email:null,
    city:"",
    pincode:"",
    contact:"",
    password:"",
    role:"2",
    agree:false
}
const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val}; 
            case 'clear':return init   
    }
}

let CompanyReg =() =>
{
    
    const [com, dispatch] = useReducer(reducer, init);
    const[agree,setAgree]=useState(false);
    const navigate = useNavigate();
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
                        userPassword: com.password,
                        userRole: com.role,
                        userUsername: com.company_name,
                        userStatus:"false"
                     },
                    companyName: com.company_name,
                    companyEmail: com.company_email,
                    companyCity: com.city,
                    companyPincode: com.pincode,
                    companyContactNo: com.contact
                })    
            }
            
        fetch("http://localhost:8080/companyregister",reqData)
        .then(resp => {if(resp.status===201){            
            navigate('/login')}
        else{alert("failed")}    
    })
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
                <input type="text" id="form3Example3" className="form-control" placeholder="Name"name="Company_Name" value={com.company_name}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'company_name', val: e.target.value ,require:true})} }
                     />                
            </div>
            <div className="form-outline mb-4">
                <input type="email" id="form3Example4" className="form-control" placeholder="Email" name="Email" value={com.company_email}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'company_email', val: e.target.value })} }
                    />                
            </div>
            <div className="form-outline mb-4">
                <input type="text" id="form3Example5" className="form-control" placeholder="City" name="City" value={com.city}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'city', val: e.target.value })} }
                    />                
            </div>
            <div className="form-outline mb-4">
                <input type="number" id="form3Example6" className="form-control" placeholder="Pincode"name="Pincode" value={com.pincode}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'pincode', val: e.target.value })} }
                    />                
            </div>
            <div className="form-outline mb-4">
                <input type="number" id="form3Example7" className="form-control" placeholder="Contact No."name="Contact" value={com.contact}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'contact', val: e.target.value })} }
                    />                
            </div>
            <div className="form-outline mb-4">
                <input type="password" id="form3Example8" className="form-control" placeholder="Password" name="password" value={com.password}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'password', val: e.target.value })} }
                    />                
            </div>
            <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox"  id="form2Example33" name="agree" value={com.agree}
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
export default CompanyReg;