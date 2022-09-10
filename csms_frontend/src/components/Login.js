import {useReducer, useState} from 'react';
import "../styles/Login.css";
import { useNavigate } from 'react-router-dom';

const init = {
    user_username:"",
    user_password:""
}

const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val};
        case 'clear' :
            return init;   
    }
}

let Login = () => {

    const [user, dispatch] = useReducer(reducer, init);
    const[book,setBook]=useState({});
    const navigate = useNavigate();

    const sendData = (e) => {        
            e.preventDefault();
            const reqData = {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                    user_Username: user.user_username,
                    user_Password: user.user_password
                })
    
            }
                       
        fetch("http://localhost:8080/login",reqData)
        .then(resp => (resp.ok ? resp : Promise.reject(resp)))
        .then(resp => resp.json())
        .then(data => setBook(data))            
        
            if(book.user_Role===1)
                navigate('/adminpanel');
            else if(book.user_Role===2)
                navigate('/companypanel');
            else if(book.user_Role===3)
                navigate('/customerpanel');
                    
    }
    
    return (
        <div className='login'>
            <h1> Login Form </h1>
            <form className='form'>
            <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">Enter Username</label>
            <input type="text" id="form2Example1" className="form-control" name="name" value={user.user_username}
                onChange={ (e)=>{dispatch({type: 'update', field: 'user_username', val: e.target.value })} } />
            
            </div>

            <div className="form-outline mb-4">
            <label className="form-label" for="form2Example2">Password</label>
                <input type="password" id="form2Example2" className="form-control"  name="pwd" value={user.user_password}
                onChange={ (e)=>{dispatch({type: 'update', field: 'user_password', val: e.target.value })} }/>
               
            </div>
               
                <input type="submit" className="btn btn-primary btn-block mb-4" value="Submit" 
                onClick={ (e)=> {sendData(e)} }
                />
                <input type="reset" value="Clear" className="btn btn-primary btn-block mb-4"
                onClick={ ()=>{dispatch({type: 'clear'})} }
                />
                <div className="text-center">
                <p>Create a New Account <a href="/register">Register</a></p>
                </div>
            </form>    
            
           
        </div>
    )

}

export default Login;