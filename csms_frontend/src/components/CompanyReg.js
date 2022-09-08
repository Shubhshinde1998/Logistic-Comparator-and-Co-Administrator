import React from "react";
import {useState, useReducer} from 'react';

const init = {
    
   Company_Name: "",
   Company_Email:"",
    City:"",
    Pincode:"",
    Contact:"",
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
   
    const sendData = (e) => {    
        e.preventDefault();
        if(agree)
        {
        console.log(JSON.stringify(com));
        }
        else{
            console.log("Info cannot be shown here")
        }
    }
    return(
        <div>
            <form>
                <div >
                    <label>  CompanyName : </label>
                    <input type="text" name="Company_Name" value={com.Company_Name}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'Company_Name', val: e.target.value })} }
                    />
                </div>
                <div >
                    <label>  CompanyEmail : </label>
                    <input type="email" name="Email" value={com.Company_Email}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'Company_Email', val: e.target.value })} }
                    />
                </div>
                <div >
                    <label>  City: </label>
                    <input type="text" name="City" value={com.City}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'City', val: e.target.value })} }
                    />
                </div>
                <div >
                    <label>  Pincode : </label>
                    <input type="text" name="Pincode" value={com.Pincode}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'Pincode', val: e.target.value })} }
                    />
                </div>
                <div >
                    <label>  Contact : </label>
                    <input type="text" name="Contact" value={com.Contact}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'Contact', val: e.target.value })} }
                    />
                </div>
                <div >
                
                            
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