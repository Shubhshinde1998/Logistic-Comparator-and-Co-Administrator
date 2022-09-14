import React from 'react'
import {useEffect,useState} from 'react';

export default function ListVehicle() {
    const [company,setCompany] = useState([]);  
   
    useEffect(() => {
        fetch("http://localhost:8080/4/getvehicledetails")
        .then(resp=>resp.json())
        .then(data=>setCompany(data))
       },[])

    return (        
        <div className="row ">
            <div className="">
            <div className="table-responsive">                        
            <table className="table table-striped">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Name</th>
                </tr>
            </thead>
            <tbody>
            {                    
                company.map((v)=>
                {
                    return(                        
                        <tr scope="row">
                            <td >{v.vehicles_details_no}</td>
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
  )
}
