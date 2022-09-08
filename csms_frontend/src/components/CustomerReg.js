import React from "react";
import {useState, useReducer} from 'react';

const init = {
    
    Name: "",
    Email:"",
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

let CustomerReg =() =>
{
    
    const [cus, dispatch] = useReducer(reducer, init);
    const[agree,setAgree]=useState(false);
   
    const sendData = (e) => {    
        e.preventDefault();
        if(agree)
        {
        console.log(JSON.stringify(cus));
        }
        else{
            console.log("Info cannot be shown here")
        }
    }
    return(
        <div>
            <form>
                <div >
                    <label>  Name : </label>
                    <input type="text" name="Name" value={cus.Name}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'Name', val: e.target.value })} }
                    />
                </div>
                <div >
                    <label>  Email : </label>
                    <input type="email" name="Email" value={cus.Email}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'Email', val: e.target.value })} }
                    />
                </div>
                <div >
                    <label>  City: </label>
                    <input type="text" name="City" value={cus.City}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'City', val: e.target.value })} }
                    />
                </div>
                <div >
                    <label>  Pincode : </label>
                    <input type="text" name="Pincode" value={cus.Pincode}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'Pincode', val: e.target.value })} }
                    />
                </div>
                <div >
                    <label>  Contact : </label>
                    <input type="text" name="Contact" value={cus.Contact}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'Contact', val: e.target.value })} }
                    />
                </div>
                <div >
                
                            
                </div>
                
                <div >
                    <label>  Agree : </label>
                    <input type="checkbox" name="agree" value={cus.agree}
                    onChange={ (e)=>{setAgree(e.target.checked)}}
                    />
                </div>
                
                <input type="submit" value="Submit" 
                onClick = { (e)=>{ sendData(e) } } />
                                
            </form>
            
        </div>
    )
   
}
export default CustomerReg;