import React from 'react'
import AddDeliveryBoy from '../Company/AddDeliveryBoy';
import ListCustomer from '../Company/ListCustomer';
import ListDeliveryBoy from '../Company/ListDeliveryBoy';
import ListVehicle from '../Company/ListVehicles';
import AddVehicle from '../Company/AddVehicle';
import ListCategoryPrice from '../Company/ListCategoryPrice';

export default function DashboardCompany() {


    return(
        <div className="col main pt-5 mt-3">
    
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
       
       {/*<ListCustomer/>*/}
  
       <ListDeliveryBoy/>
       <hr/>
       <ListVehicle/>     
       <hr/> 
       <ListCategoryPrice/>
       <AddDeliveryBoy/>
       <hr/>
       <AddVehicle/>
       <hr/>              
        </div>
        
        
    </div>
    )
}