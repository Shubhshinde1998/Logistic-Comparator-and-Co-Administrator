import React from 'react';
import {useEffect,useState} from 'react';
import "../../styles/Registration.css";
import Payment from '../Payment';

export default function OrderForm() {
   const [company,setCompany] = useState([]);  
   const [category,setCategory] = useState([]);
   const [price,setPrice] = useState([]);
   const [totalprice,setTotalPrice] = useState(0);   
   const [valueCompany, setValueCompany] = useState([]);
   const [valueCategory, setValueCategory] = useState([]);

   let customerName= (JSON.parse(localStorage.getItem("customer")).customerName)

   const handleCompanyChange = (e) => {
      setValueCompany(e.target.value);
      getCategoryPrice();
    };

   const handleCategoryChange = (e)=>{
      setValueCategory(e.target.value);
      getCategoryPrice();
    }
   const getCategoryPrice = () =>{
      //let com= (JSON.parse(localStorage.getItem("company")).companyId)
      let com =valueCompany;
      console.log(com);
      fetch("http://localhost:8080/"+com+"/getprice")
      .then(resp=>resp.json())
      .then(data=>setPrice(data))
      totalPrice();
  }
  const totalPrice = ()=>{
   
     price.map((v)=>{
      if(v.category.categoryId==valueCategory && v.companyId==valueCompany)
      {
         setTotalPrice(v.categoryPrice);
      }
     })

   console.log(totalprice);
  }
   const getCategory = () =>{
     // let com= (JSON.parse(localStorage.getItem("company")).companyId)
     // let com = company.companyId;
      fetch("http://localhost:8080/getcategory")
      .then(resp=>resp.json())
      .then(data=>setCategory(data))    
      console.log(category);
  }
   const getCompany = () =>{
      fetch("http://localhost:8080/getallcompany")
      .then(resp=>resp.json())
      .then(data=>setCompany(data))
  }
  useEffect(() => {        
   getCompany();
   getCategory();
   getCategoryPrice();
   totalPrice();
  },[])

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
            <input type="textarea" id="pickupaddress" name="pickupaddress" className="form-control"/>     
         </div>

         <div className="form-outline mb-4">
            <lable>Receiver Name:</lable>
            <input type="text" id="receivername" name="receivername" className="form-control"/>     
         </div>

         <div className="form-outline mb-4">
            <lable>Delivery Address:</lable>
            <input type="textarea" id="deliveryaddress" name="deliveryaddress" className="form-control"/>     
         </div>

         <div className="form-outline mb-4">
            <lable>Total Price:</lable>
            <input type="text" id="price" name="price" className="form-control" value={totalprice} readOnly={true}/><br/>
            <button className='btn btn-primary btn-block mb-4' onClick={<Payment name="true"/> }>Make Payment</button>
         </div>
         <hr></hr>

         <div className="form-outline mb-4">
            <button type="submit"  id="submit" className="btn btn-primary btn-block mb-4">Submit</button>
         </div>   

      </form>
    </div>
    
  )
}
