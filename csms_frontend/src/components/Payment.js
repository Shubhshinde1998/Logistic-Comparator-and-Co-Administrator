import React,{useState} from "react";
import {Modal,ModalBody,ModalHeader} from "reactstrap";
function Payment(props) {
    const[modal,setmodal]=useState(false);
    
    return(
        <div>
            <Modal 
            
            size="lg"
            isOpen={modal}
            toggle={() => setmodal(!modal)}         
           
            >
                <ModalHeader>
                    popup
                </ModalHeader>
                <ModalBody>
                <h6>Done with your payment?</h6>           
        <div className="form-outline mb-4">
           <table>
            <tr>
                <td><button className='btn btn-primary btn-block mb-4' style={{backgroundColor:"#0b3629",color:"white"}}>YES</button></td>
                <td><button className='btn btn-primary btn-block mb-4' style={{backgroundColor:"#0b3629",color:"white"}}>NO</button></td>
            </tr>
           </table>                          
        </div>
                </ModalBody>
            </Modal>
   
        </div>
    )
}
export default Payment;