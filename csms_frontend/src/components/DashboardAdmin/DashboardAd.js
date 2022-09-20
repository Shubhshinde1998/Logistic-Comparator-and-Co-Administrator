
import AllComplaint from '../Admin/AllComplaints';
import AllFeedback from '../Admin/AllFeedback';
import ListedCompany from '../Admin/ListedCompany';
import PendingCompany from '../Admin/PendingCompany';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const DashboardAd = () => {

    return (
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
            <Routes>
                <Route path="/company" element={<ListedCompany/>}/>
                <Route path="/pendingcompany" element={<PendingCompany/>}/>
                <Route path="/feedbacks" element={<AllFeedback/>}/>
                <Route path="/complaints" element={<AllComplaint/>}/>   
            </Routes>    
        </div>      
    </div>
    )
}
 
export default DashboardAd