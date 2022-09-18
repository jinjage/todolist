import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup'

class UserLogin extends Component {
  state = {
      userName : '' ,
      validation : ''
  }
  
  karakterUcdenBuyuk = async () => {
    if(this.state.userName.length > 3)
        return true;
    else 
        return false;
  } 

  loginFunction = async () => {
    if(await this.karakterUcdenBuyuk()){
        console.log("loginFunction is runned");
        localStorage.setItem('username', this.state.userName);
        localStorage.setItem('session', "x");
        window.appRefleshFunction();//app i reflesh et
    }
    else
        this.setState({validation:false})

    
    
  }
  render() {
    return (
            <Card className="fixed-bottom" style={{ width: '18rem' , position : "relative" , margin: "auto"  ,top: "200px" }}  >
                <Form > 
                    <Card.Header>Todo's application</Card.Header>
                    <Card.Body>
                        <Card.Title><br/></Card.Title>
                        <Card.Text>
                            <InputGroup hasValidation>
                                <InputGroup.Text>User Name : </InputGroup.Text>
                                <Form.Control 
                                    type="text" 
                                    required 
                                    onChange={(e) => { this.setState({userName : e.target.value});  }} value={this.state.userName}
                                />
                                {
                                    (this.state.validation===false)?
                                    <Form.Control.Feedback type="isvalid">
                                        Input have more than 3 char
                                    </Form.Control.Feedback>
                                    :
                                    null
                                }
                            </InputGroup>
                        </Card.Text>
                    <Button variant="primary"  onClick={this.loginFunction}>Login</Button>
                    </Card.Body>
                </Form>
        </Card>
    )
  }
}
export default UserLogin;

/*
isInvalid
isvalid

*/