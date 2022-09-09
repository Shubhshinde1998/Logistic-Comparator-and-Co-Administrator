import React from "react";
import {useState, useReducer} from 'react';

const init = {
    
   company_name: "",
   company_email:"",
    city:"",
    pincode:"",
    contact:"",
    password:"",
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

let CompanyReg =() =>
{
    
    const [com, dispatch] = useReducer(reducer, init);
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
                        user_Password: com.password,
                        user_Role: com.role,
                        user_Username: com.company_name
                     },
                    company_Name: com.company_name,
                    company_Emailid: com.company_email,
                    company_City: com.city,
                    company_Pincode: com.pincode,
                    company_Contactno: com.contact
                })    
            }
            
        fetch("http://localhost:8080/companyregister",reqData)
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
        <div>
            <form>
                <div >
                    <label>  Company Name : </label>
                    <input type="text" name="Company_Name" value={com.company_name}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'company_name', val: e.target.value })} }
                    />
                </div>
                <div >
                    <label>  Company Email : </label>
                    <input type="email" name="Email" value={com.company_email}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'company_email', val: e.target.value })} }
                    />
                </div>
                <div >
                    <label>  City: </label>
                    <input type="text" name="City" value={com.city}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'city', val: e.target.value })} }
                    />
                </div>
                <div >
                    <label>  Pincode : </label>
                    <input type="number" name="Pincode" value={com.pincode}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'pincode', val: e.target.value })} }
                    />
                </div>
                <div >
                    <label>  Contact : </label>
                    <input type="number" name="Contact" value={com.contact}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'contact', val: e.target.value })} }
                    />
                </div>
                <div >
                    <label>  Password : </label>
                    <input type="password" name="password" value={com.password}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'password', val: e.target.value })} }
                    />
                </div>
                <div >
                    <label>  Role : </label>
                    <input type="number" name="role" value={com.role}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'role', val: e.target.value })} }
                    />
                </div>              
                <div >
                    <label>  Agree : </label>
                    <input type="checkbox" name="agree" value={com.agree}
                    onChange={ (e)=>{setAgree(e.target.checked)}}
                    />
                </div>
                
                <input type="submit" value="Submit" 
                onClick = { (e)=>{ sendData(e) } } />
                                
            </form>
            
        </div>
    )
   
}
export default CompanyReg;