import axios from "axios";
import { useState } from "react";

function Registered()
{
   const [id, setId] = useState("");
   const [firstname, setFname] = useState("");
   const [lastname, setLname] = useState("");
   const [city, setCity] = useState("");
   const [phone, setPhone] = useState("");
   const [salary, setSalary] = useState("");

   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8013/save", 
        {
        id: id,
        fname: firstname,
        lname : lastname,
        city : city,
        phone : phone,
        salary :salary 
        });
          alert("User Registation Successfully");
          setId("");
          setFname("");
          setLname("");
          setCity("");
          setPhone("");
          setSalary("");
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <div className="register-container">
     
            <form className="register-form" onSubmit={handleSubmit}> 
            <br></br>      
            <h1>Register</h1>
            <p>Fill in the Information Below</p>

            <input type="text" 
             name="id"
             placeholder="id"
                     
             onChange={(event) =>
              {
                  setId(event.target.value);       
              }}
            /><br></br>

            <input type="text" 
            name="firstname" 
            placeholder="Firstname" 
            onChange={(event) =>
                {
                    setFname(event.target.value);       
                }}
            /><br></br>

            <input type="text" 
            name="lastname"
            placeholder="lastname"
            onChange={(event) =>
                {
                    setLname(event.target.value);       
                }}           
            />
    <br></br>
             
            <input type="text" 
            name="city" 
            placeholder="city"
            onChange={(event) =>
                {
                    setCity(event.target.value);       
                }}           
            /><br></br>
        <input type="text" 
            name="phone" 
            placeholder="phone"
            onChange={(event) =>
                {
                    setPhone(event.target.value);       
                }}           
            /><br></br>

    <input type="text" 
            name="salary" 
            placeholder="salary"
            onChange={(event) =>
                {
                    setSalary(event.target.value);       
                }}           
            /><br></br>

            <button type="submit">Register</button>

    
            </form>     

     
        </div>
    )
}

export default Registered;