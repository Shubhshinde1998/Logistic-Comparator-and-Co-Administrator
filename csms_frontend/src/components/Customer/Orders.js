import React from 'react'
import "../../styles/Registration.css";

export default function Orders() {
  return (
    <div className="register">
    <div><h1>Order</h1></div>
    <form className="formreg">
        <div className="form-outline mb-4">
     <lable><h6>Customer Name:</h6>
        <input type="text" id="form3Example4" className="form-control" readOnly={true}/>
     </lable>
     </div>

     <div className="form-outline mb-4">
     <lable><h6>Select Company:</h6>
      <select id="form3Example4" className="form-control">

      </select>
     </lable>
     </div>

     <div className="form-outline mb-4">
     <lable><h6>Adress Of Pickup Loacation:</h6>
        <input type="text" id="form3Example4" className="form-control"/>
     </lable>
     </div>

     <div className="form-outline mb-4">
     <lable><h6>Catagory:</h6>
     <select id="form3Example4" className="form-control">
     <option value="Electronic">Electronic</option>
     <option value="Heavy Weight">Heavy Weight</option>
     <option value="Light Weight">Light Weight</option>
  
     </select>

     </lable>
     </div>

     <div className="form-outline mb-4">
     <label><h6>Price:</h6>
     <input type="text" id="form3Example4" className="form-control" readOnly={true}/>
     </label>
     </div>

     <div >
     <button type="submit"  id="btn1"className="btn btn-primary btn-block mb-4">Submit</button>
     </div>

    </form>
    </div>
    
  )
}
