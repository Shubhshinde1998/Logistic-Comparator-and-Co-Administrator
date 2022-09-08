import {useReducer, useState,Component} from 'react';

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

    const sendData = (e) => {        
            e.preventDefault();
            const reqData = {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                    user_Username: user.user_username
                })
    
            }
                       
        fetch("http://localhost:8080/login",reqData)
        .then(resp => (resp.ok ? resp : Promise.reject(resp)))
        .then(resp => resp.json())
        .then(data => setBook(data))                
        
            if(book.user_Role===1)
                alert("admin");
            else if(book.user_Role===2)
                alert("company");
            else if(book.user_Role===3)
                alert("customer");
            else
                alert("check username & password");
                    
    }
    
    return (
        <div>
            <h1> Login Form </h1>
            <form>
                <label> Enter Username : </label>
                <input type="text" name="name" value={user.user_username}
                onChange={ (e)=>{dispatch({type: 'update', field: 'user_username', val: e.target.value })} }
                 />
                <br/>
                <label> Password : </label>
                <input type="password" name="pwd" value={user.user_password}
                onChange={ (e)=>{dispatch({type: 'update', field: 'user_password', val: e.target.value })} }
                />
                <br/>
                <input type="submit" className="btn btn-primary" value="Send" 
                onClick={ (e)=> {sendData(e)} }
                />
                <input type="reset" value="Clear" className="btn btn-primary"
                onClick={ ()=>{dispatch({type: 'clear'})} }
                />
            </form>           
            {JSON.stringify(book)} <br/>
           
        </div>
    )

}

export default Login;

