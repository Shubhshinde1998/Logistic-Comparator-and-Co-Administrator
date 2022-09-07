import {useReducer, useState} from 'react';

const init = {
    user_id:0,
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
    const [msg, setMsg] = useState("");
    const[book,setBook]=useState({});

    const sendData = (e) => {        
            e.preventDefault();
           
                fetch("http://localhost:8080/user/"+user.user_id)
                .then(resp => resp.json())
                .then(data => setBook(data))
                if(user.user_id==book.user_Id && user.user_password==book.user_Password)
                    alert("successful");
                    else
                    alert("failed")
            
    }

    return (
        <div>
            <h1> Login Form </h1>
            <form>
                <label> Enter ID : </label>
                <input type="number" name="id" value={user.user_id}
                onChange={ (e)=>{dispatch({type: 'update', field: 'user_id', val: e.target.value })} }
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
            {msg}
        </div>
    )

}

export default Login;

