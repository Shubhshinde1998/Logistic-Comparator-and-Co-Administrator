import React from "react";
import {useState, useReducer} from 'react';
import "../../styles/Registration.css";

const init = {      
  vehicleno:""
}
const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val}; 
        case 'clear':
            return init   
    }
}

export default function AddVehicle() {
    const [com, dispatch] = useReducer(reducer, init);
    
    const sendData = (e) => {    
        //e.preventDefault();
        let company= (JSON.parse(localStorage.getItem("company")).companyId)
        
            const reqData = {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify({                   
                    vehiclesDetailsNo: com.vehicleno,
                    companyId: company                    
                })    
            }
            
        fetch("http://localhost:8080/vehicleregister",reqData)
        .then(function(response) {
            if(response.status === 200) {
               alert("Vehicle added succesfully");
             }
             else
                alert("unable to add vehicle")
            }) 
       
    }

    return (
        <div className="register">
        <h1>Add Vehicle</h1>
        <form className="formreg">            
        <div className="form-outline mb-4">
            <input type="text" id="form3Example4" className="form-control" placeholder="Vehicle No." name="vehicleno" value={com.vehicleno}
                onChange={ (e)=>{dispatch({type: 'update', field: 'vehicleno', val: e.target.value })} }
                />                
        </div>
        
        <button type="submit" id="btn1"className="btn btn-primary btn-block mb-4" value="Submit" 
            onClick = { (e)=>{ sendData(e) } }>Submit</button>
        </form>        
    </div>
  )
}
