   
import React from "react";
import {useState, useReducer,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Registration.css";
const init = {
    
    name : null,
    email :null,
    city :null,
    pincode :null,
    contact :null,
    password :null,
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
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(cus);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
          errors.name = "Name is required!";
        }        
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
        if (!values.city) {
            errors.city = "City is required";
        }
        if (!values.pincode) {
            errors.pincode = "Pincode is required";
        }else if (values.pincode.length < 6) {
            errors.pincode = "Pincode must be in 6 digit";}
        if (!values.contact) {
            errors.contact = "Contact No is required";
        }else if (values.contact.length < 6) {
            errors.contact = "Contact must be more than 6 characters";}
        if (!values.password) {
            errors.password = "Passsword is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (!values.agree) {
            errors.agree = "Accept terms and condition";
        }   
        return errors;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(cus));
        setIsSubmit(true);
        sendData(e);
      };

    const sendData = (e) => {    
        e.preventDefault();
       
            const reqData = {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                    user:{         
                        userPassword : cus.password,
                        userRole : cus.role,
                        userUsername : cus.name,
                        userStatus:"false"
                     },
                    customerName : cus.name,
                    customerEmail : cus.email,
                    customerCity : cus.city,
                    customerPincode : cus.pincode,
                    customerContactNo : cus.contact

                })    
            }
            
        fetch("http://localhost:8080/customerregister",reqData)
        .then(resp => {if(resp.status===200){            
            navigate('/login')}
       
    })
        
    }
    return(
        <div className="register">
            <h1>Customer Registration Form</h1>
            <form className="formreg">

            <div className="form-outline mb-4">
                <input type="text" id="form3Example3" className="form-control" placeholder="Name" name="CustomerName" value={cus.name}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'name', val: e.target.value })} }
                     /> 
            <p className="text-danger">{formErrors.name}</p>                  
            </div>
            <div className="form-outline mb-4">
                <input type="email" id="form3Example4" className="form-control" placeholder="Email"name="email" value={cus.email}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'email', val: e.target.value })} }
                    />
            <p className="text-danger">{formErrors.email}</p>                        
            </div>
            <div className="form-outline mb-4">
                <input type="text" id="form3Example5" className="form-control" placeholder="City" name="city" value={cus.city}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'city', val: e.target.value })} }
                    />
            <p className="text-danger">{formErrors.city}</p>                
            </div>
            <div className="form-outline mb-4">
                <input type="number" id="form3Example6" className="form-control" placeholder="Pincode"name="pincode" value={cus.pincode}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'pincode', val: e.target.value })} }
                    />
            <p className="text-danger">{formErrors.pincode}</p>                
            </div>
            <div className="form-outline mb-4">
                <input type="number" id="form3Example7" className="form-control" placeholder="Contact No."name="contact" value={cus.contact}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'contact', val: e.target.value })} }
                    />
            <p className="text-danger">{formErrors.contact}</p>                
            </div>
            <div className="form-outline mb-4">
                <input type="password" id="form3Example8" className="form-control" placeholder="Password"name="password" value={cus.password}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'password', val: e.target.value })} }
                    />
            <p className="text-danger">{formErrors.password}</p>                
            </div>
            <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox"  id="form2Example33" name="agree" value={cus.agree}
                    onChange={ (e)=>{setAgree(e.target.checked)}} />
                <label className="form-check-label" for="form2Example33">Agree Terms and Conditions</label>
                <p className="text-danger">{formErrors.agree}</p>
            </div>
            <button type="submit" id="btn1"className="btn btn-primary btn-block mb-4" value="Submit" 
                onClick = { (e)=>{ handleSubmit(e) } }>Submit</button>
            <div className="text-center">
                <p>Already Have Account? <a href="/login">Login</a></p>
                </div>
            </form>
            
        </div>
    )
   
}
export default CustomerReg;