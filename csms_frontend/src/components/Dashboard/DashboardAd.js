import {useEffect,useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import CompanyReg from '../CompanyReg';

const Dashboard = () => {

 
   useEffect(() => {
    fetch("http://localhost:8080/getallcompany")
    .then(resp=>resp.json())
    .then(data=>setCustomer(data))
   },[])
   const [customer,setCustomer] = useState([]);

    
 
    return (
    <div className="col main pt-5 mt-3">
        <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div>
        <div className="row mb-3">
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card bg-success text-white h-100">
                    <div className="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div className="rotate">
                            <i className="fa fa-user fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase">All Companies</h6>
                        <h1 className="display-4">15</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-danger h-100">
                    <div className="card-body bg-danger">
                        <div className="rotate">
                            <i className="fa fa-list fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase">Pending Request</h6>
                        <h1 className="display-4">8</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-info h-100">
                    <div className="card-body bg-info">
                        <div className="rotate">
                          <i className="fab fa-twitter fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase">Compaints</h6>
                        <h1 className="display-4">4</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-warning h-100">
                    <div className="card-body">
                        <div className="rotate">
                            <i className="fa fa-share fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase">Feedback</h6>
                        <h1 className="display-4">9</h1>
                    </div>
                </div>
            </div>
        </div>
    <div>
        <Routes>
            <Route path='/overview' element={<CompanyReg/>}></Route>
        </Routes>
        
    </div>
       
        <div className="row ">
            <div className="">
              <h5 className="mt-3 mb-3 text-secondary">
               Check More Records of Customer
              </h5>
        <div className="table-responsive">                        
            <table className="table table-striped">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact No.</th>
                    <th scope="col">City</th>
                    <th scope="col">Pincode</th>
                </tr>
            </thead>
            <tbody>
            {                    
                customer.map((v)=>
                {
                    return(                        
                        <tr scope="row">
                            <td >{v.company_Name}</td>
                            <td >{v.company_Emailid}</td>
                            <td >{v.company_Contactno}</td>
                            <td >{v.company_City}</td>
                            <td >{v.company_Pincode}</td>
                            <td><button className='btn btn-success'>Accept</button></td>
                            <td><button className='btn btn-danger'>Delete</button></td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
                </div>
            </div>
            
        </div>
 
    </div>
    )
}
 
export default Dashboard