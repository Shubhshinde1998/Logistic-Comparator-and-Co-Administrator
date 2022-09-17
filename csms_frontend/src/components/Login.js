import {useReducer} from 'react';
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
    const navigate = useNavigate();
    //const [formError, setFormError] = useState({});

   /* const validate = (user) => {
        console.log("in validate");
        console.log(user);
        const errors = {};
        if (!user.username) {
          errors.username = "Username is required!";
        }        
        if (!user.password) {
          errors.password = "Password is required";
        } else if (user.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (user.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        setFormError(errors);
        return errors;
      };*/
    const sendData = (e) => {        
            e.preventDefault();
           // console.log(e);
          // console.log("in sendata");
       // if(validate(e)>0)
        //{
            console.log("validate is true");
            const reqData = {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                    username: user.user_username,
                    password: user.user_password
                })    
            }
                       
        fetch("http://localhost:8080/login",reqData)
        .then(resp => (resp.ok ? resp : Promise.reject(resp)))
        .then(resp => resp.text())
        .then(data => {
            
            const json=JSON.parse(data);
            
            if(!json.error){
                if(json.userRole===1)
                {      
                    localStorage.setItem("admin",data)    
                    navigate('/adminpanel');
                }
                else if(json.user.userRole===2)
                {
                    localStorage.setItem("company",data)
                    navigate('/companypanel');
                }
                else if(json.user.userRole===3)
                {
                    localStorage.setItem("customer",data)
                    navigate('/customerpanel');
                }
            }
            else
            {
                alert("invalid");
            }
        }) 
    //}           
    }
   
    
    return (
        <div className='login'>
            <h1> Login Form </h1>
            <form className='form'>
            <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">Enter Username</label>
            <input type="text" id="form2Example1" className="form-control" name="name" value={user.user_username}
                onChange={ (e)=>{dispatch({type: 'update', field: 'user_username', val: e.target.value })} } required/>
            {/*<p className="text-danger">{formError.username}</p>*/}
            </div>            
            <div className="form-outline mb-4">
            <label className="form-label" for="form2Example2">Password</label>
                <input type="password" id="form2Example2" className="form-control"  name="pwd" value={user.user_password}
                onChange={ (e)=>{dispatch({type: 'update', field: 'user_password', val: e.target.value })} }required/>
            {/*<p className="text-danger">{formError.password}</p>*/}
            </div>
               
                <input type="submit" className="btn btn-primary btn-block mb-4" value="Submit" 
                onClick={ (e)=> {sendData(e)}}
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