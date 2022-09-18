import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button , Form,Row,Col} from 'react-bootstrap';
import TodoItemAdd from "./TodoItemAdd.js";
import './Mdlinf.css';
import axios from "axios";
import XConsumer from './Context.js';
function ModalBindTodoItemAdd() {
  const [show, setShow] = useState(false);
  const handleClose = async() => {
    if(window.YeniDuyuruModdleStatus===true){
        setShow(false); 
        window.YeniDuyuruModdleStatus = false;
    }else {
    }
  }
  const handleShow = () =>{ 
        setShow(true); 
        window.YeniDuyuruModdleStatus = true;
  }
  window.YeniDuyuruModdleShow = handleShow;
  window.YeniDuyuruModdleClose = handleClose;
  return (
    <>
    <XConsumer>
      {
        value => {
          const { dispatch ,blackModeState} = value;
          //window.dispatchApp = dispatch;
          //this.deneme = dispatch;
          return (
                  <>
                    <Modal
                      show={show}
                      onHide={() => handleClose()}
                      size="lg"
                      dialogClassName="main-modal-xx"
                      aria-labelledby="example-custom-modal-styling-title"

                      
                      centered
                    >
                      <Modal.Header closeButton style= {{backgroundColor : (blackModeState===true)?"#c3c4c7":null}} >
                        <Modal.Title id="example-custom-modal-styling-title">
                          TodoItemAdd
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body style= {{backgroundColor : (blackModeState===true)?"#a7aaad":null}} >
                        <TodoItemAdd />
                      </Modal.Body>
                    </Modal>
                  </>
          )
        }
      }
    </XConsumer>
    </>
  );
}
export default ModalBindTodoItemAdd;


/*

  return (
      <>
      <XConsumer>
        {
          value => {
            const { dispatch ,blackModeState} = value;
            //window.dispatchApp = dispatch;
            //this.deneme = dispatch;
            return (
                    <>
                      <Modal
                        show={show}
                        onHide={() => handleClose()}
                        size="lg"
                        dialogClassName="main-modal-xx"
                        aria-labelledby="example-custom-modal-styling-title"

                        style= {{backgroundColor : (blackModeState===true)?"#c3c4c7":null}} 
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="example-custom-modal-styling-title">
                            TodoItemAdd
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <TodoItemAdd />
                        </Modal.Body>
                      </Modal>
                    </>
            )
          }
        }
      </XConsumer>
      </>
    )

*/