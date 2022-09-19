import React from 'react';
import {useEffect,useState,useReducer} from 'react';
import "../../styles/Registration.css";

const init = {
    
   pickupaddress:null,
   receivername:null,
   deliveryaddress:null,
   paymentstatus:false
}
const reducer = (state,action) => {
   switch(action.type){
       case 'update':
           return { ...state, [action.field]: action.val}; 
       case 'clear':return init   
   }
}

export default function OrderForm() {
   const [orderdetails,dispatch] = useReducer(reducer,init);
   const [company,setCompany] = useState([]);  
   const [category,setCategory] = useState([]);
   const [price,setPrice] = useState([]);
   const [totalprice,setTotalPrice] = useState(0);   
   const [valueCompany, setValueCompany] = useState(0);
   const [valueCategory, setValueCategory] = useState(0);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);

let customerName= (JSON.parse(localStorage.getItem("customer")).customerName)
let categoryPricingId=0;

const handleCompanyChange =  (e) => {
   setValueCompany(e.target.value);
   getCategoryPrice();
 };
 const handleCategoryChange =  (e)=>{
   setValueCategory(e.target.value);
   getCategoryPrice();
 }
 const getCategoryPrice =  () =>{

   let com = valueCompany;
   if(valueCompany!=null && valueCategory!=null)
   {
   fetch("http://localhost:8080/"+com+"/getprice")
   .then(resp=>resp.json())
   .then(data=>setPrice(data))
   .then(totalPrice());
   }
   else
   {
      console.log("unable to fetch")
   }
}
const totalPrice = ()=>{   
   price.map((v)=>{
    if(v.category.categoryId==valueCategory && v.companyId==valueCompany)
    {
       setTotalPrice(v.categoryPrice);
       categoryPricingId = v.categoryPricingId;
    }
    else{
      console.log("unable to set total price");
    }
   })
}
const getCategory = () =>{
    fetch("http://localhost:8080/getcategory")
    .then(resp=>resp.json())
    .then(data=>setCategory(data))   

}
const getCompany = () =>{
   fetch("http://localhost:8080/approvedcompany")
   .then(resp=>resp.json())
   .then(data=>setCompany(data))
}
useEffect(() => {        
   getCompany();
   getCategory();
   getCategoryPrice();
  },[formErrors])

const handleSubmit = (e) => {
   e.preventDefault();
   setFormErrors(validate(orderdetails));
   setIsSubmit(true);
   sendData(e);
 };
 const validate = (values) => {
   const errors = {};
   if (!values.pickupaddress) {
     errors.pickupaddress = "Pick-up address is required!";
   }        
   if (!values.receivername) {
     errors.receivername = "Receiver Name is required";
   } 
   if (!values.deliveryaddress) {
       errors.deliveryaddress = "Delivery Address is required";
   }
   if (!values.paymentstatus) {
       errors.paymentstatus = "Have to make Payment!!";
   }   
   return errors;
 };

 const sendData = (e) => {    
   e.preventDefault();
   let customerId= (JSON.parse(localStorage.getItem("customer")).customerId)
   const requestTime = new Date();
        const reqData = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({

            companyId:valueCompany,
            categoryId:valueCategory,
            customerId:customerId,
            pickupAddress:orderdetails.pickupaddress,
            receiverName:orderdetails.receivername,
            deliveryAddress:orderdetails.deliveryaddress,
            categoryPricingId:5,
            paymentStatus:orderdetails.paymentstatus,
            requestTime:requestTime,
            vehiclesDetailsId: 14,
            deliveryBoyId: 12
            })    
        }

       console.log(reqData); 
    fetch("http://localhost:8080/orderrequest",reqData)
    .then(resp => {if(resp.status===200)
      {            
        alert("order send successfully!!!")
      }
      else{
         alert("Failed to send Order!!!")
      }
     
});
}

   return (
    <div className="register">
    <div><h1>Courier Details Form</h1></div>
    <form className="formreg">
        <div className="form-outline mb-4">
            <lable>Customer Name:</lable>
            <input type="text" id="customername" className="form-control" value={customerName} readOnly={true}/>     
         </div>

         <div className="form-outline mb-4">
            <lable>Select Company:</lable>
            <select id="companyname" name="companyname" className="form-control" value={valueCompany} onChange={handleCompanyChange}>
               <option value="">Company Names :</option>
               {company.map((company) => (
               <option value={company.companyId}>{company.companyName}</option>
               ))}
            </select>
            <p>{`You selected ${valueCompany}`}</p>      
         </div>

         <div className="form-outline mb-4">
            <lable>Select Category:</lable>
            <select id="companyname" name="categoryname" className="form-control" value={valueCategory} onChange={handleCategoryChange}>
            <option value="">Category Names :</option>
               {category.map((category) => (
               <option value={category.categoryId}>{category.categoryName}</option>
               ))}
            </select>
            <p>{`You selected ${valueCategory}`}</p>         
         </div>

         <div className="form-outline mb-4">
            <lable>Pickup Address:</lable>
            <input type="textarea" id="pickupaddress" name="pickupaddress" className="form-control"
            value={orderdetails.pickupaddress}
            onChange={ (e)=>{dispatch({type: 'update', field: 'pickupaddress', val: e.target.value })} }
            /> 
         <p className="text-danger">{formErrors.pickupaddress}</p>     
         </div>

         <div className="form-outline mb-4">
            <lable>Receiver Name:</lable>
            <input type="text" id="receivername" name="receivername" className="form-control"
            value={orderdetails.receivername}
            onChange={ (e)=>{dispatch({type: 'update', field: 'receivername', val: e.target.value })} }
            /> 
         <p className="text-danger">{formErrors.receivername}</p>     
         </div>

         <div className="form-outline mb-4">
            <lable>Delivery Address:</lable>
            <input type="textarea" id="deliveryaddress" name="deliveryaddress" className="form-control"
            value={orderdetails.deliveryaddress}
            onChange={ (e)=>{dispatch({type: 'update', field: 'deliveryaddress', val: e.target.value })} }
            />
         <p className="text-danger">{formErrors.deliveryaddress}</p>     
         </div>

         <div className="form-outline mb-4">
            <lable>Total Price:</lable>
            <input type="text" id="price" name="price" className="form-control" value={totalprice} readOnly={true}/><br/>
            {/*<button className='btn btn-primary btn-block mb-4' >Make Payment</button>*/}
         </div>
         <hr></hr>

         <div className="form-outline mb-4">
            <button type="submit"  id="submit" className="btn btn-primary btn-block mb-4"
            onClick = { (e)=>{ handleSubmit(e) } }
            >Submit</button>
         </div>   

      </form>
    </div>
    
  )
}




   /*const stateRef = useRef();
   stateRef.current = valueCompany;
   let customerName= (JSON.parse(localStorage.getItem("customer")).customerName)

   const handleCompanyChange = async (e) => {
      console.log("setting company value")
      console.log(e.target.value);
      setValueCompany(e.target.value);
       
      //console.log(valueCompany+" in handlecompanychnage")
      console.log("company value set calling populate category");
      // getCategoryPrice(e.target.value);
      await populatCategoryPrice(e.target.value);
    };

   const handleCategoryChange =  (e)=>{
      setValueCategory(e.target.value);
       // getCategoryPrice();
       onCategoryChange(e.target.value);
    }
   const getCategoryPrice =  (e) =>{
      //let com= (JSON.parse(localStorage.getItem("company")).companyId)
      let com =e;
      console.log(com);
      if(valueCompany!=null && valueCategory!=null){
      fetch("http://localhost:8080/"+com+"/getprice")
      .then(resp=>resp.json())
      .then(data=>setPrice(data))
      .then(totalPrice());
      }
      else
      {
         console.log("unable to fetch")
      }

  }
  const populatCategoryPrice = async(e)=>
  {console.log("populating category pricing "+ e)
   if(e!=0){
      let resp = await fetch("http://localhost:8080/"+e+"/getprice")
      setPrice(await resp.json());
      console.log(price);
   }
   else
   {
      console.log("skipped call, company not selected");
   }
  }
  const onCategoryChange = (e) =>
  {
      if(valueCompany==0)
      {
         alert("Please select Company");
      }
      else
      {
         totalPrice(e);
      }

  }
  const totalPrice = (e)=>{
   
     price.map((v)=>{
      if(v.category.categoryId==e && v.companyId==stateRef.current)
      {
         setTotalPrice(v.categoryPrice);
      }
     })
   console.log(totalprice+"in total price");
  }
   const getCategory = () =>{
     // let com= (JSON.parse(localStorage.getItem("company")).companyId)
     // let com = company.companyId;
      fetch("http://localhost:8080/getcategory")
      .then(resp=>resp.json())
      .then(data=>setCategory(data))    
      //console.log(category);
  }
   const getCompany = () =>{
      fetch("http://localhost:8080/getallcompany")
      .then(resp=>resp.json())
      .then(data=>setCompany(data))
  }
  useEffect(() => {        
   getCompany();
   getCategory();
   //getCategoryPrice();
   //totalPrice();
   //populatCategoryPrice();
   //onCategoryChange();
   //console.log(valueCompany+"in useeffect");
  },[])
*/