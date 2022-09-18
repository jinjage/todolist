import React, { Component } from 'react'
import CloseButton from 'react-bootstrap/CloseButton';
import { Form,Row,Col,Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import axios from "axios";
import XConsumer from './Context.js';
/*
id=""
content = ""
isCompleted = ""
*/
class TodoItemAdd extends Component {
  constructor(props){
    super(props);
    this.state = {
      id : '',
      content : '',
      isCompleted : '',
    }
  }
  componentDidMount = () => {
  }
  submitAdd = async () => {
    //console.log("this.state.isCompleted",this.state.isCompleted,"this.state.content",this.state.content);

      if(this.formValidation()===true){
        console.log("validion true");
        await this.AddItem(this.state.content,this.state.isCompleted);
        await window.getAllTodosFromApiFunction();//listelemeyi reflesh et
        window.YeniDuyuruModdleClose();//modal ekranını kapat
      }
      else{
        console.log("vali false");
        window.alert("Validation error!")

      }  
        
  }
  formValidation = () => {

    console.log("this.state.isCompleted",this.state.isCompleted,"this.state.content",this.state.content);

    if((this.state.isCompleted==="true" ||this.state.isCompleted==="false") && this.state.content.length>10)
      return true;
    else  
      return false;
  }
 
  AddItem = async (content , isCompleted) => {
    var data = JSON.stringify({
      "content": content,
      "isCompleted": isCompleted
    });
    
    var config = {
      method: 'post',
      url: 'https://631ec92558a1c0fe9f57eaf4.mockapi.io/todos/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    var responseService =  await axios(config);

    console.log(responseService);

  }  
  render() {
    return (
      <>
      <XConsumer>
        {
          value => {
            const { dispatch ,blackModeState} = value;
            //window.dispatchApp = dispatch;
            //this.deneme = dispatch;
            return (
              <div className="w-100  "  
                style={{ width: '18rem' , 
                              position : "relative" , 
                              margin: "auto"  ,
                              top: "1px" ,
                              backgroundColor: (blackModeState===false) ? "lightblue" : "#8c8f94"  ,
                              padding: "25px 50px" , 
                              marginTop: "5px"  }}>
              <Row className>
                    <Col className="" xs={2}>
                      <Form.Select 
                        className="text-center" 
                        onChange={(e) => this.setState({isCompleted : e.target.value})}
                        style= {{backgroundColor : (blackModeState===true)?"#c3c4c7":null}} 
                        value={this.state.isCompleted} >
                      <option>isCompleted</option>
                      <option>true</option>
                      <option>false</option>
                      </Form.Select>
                    </Col>
                    <Col xs={9}>
                          <Form.Control as="textarea"  
                            placeholder="To Do" 
                            className="mb-3" 
                            style={{  backgroundColor : (blackModeState===true)?"#a7aaad":null}}
                            onChange={(e) => this.setState({content : e.target.value})} 
                            value={this.state.Content}/>
                    </Col>
                    <Col xs={1}>
                            <Button variant= {(blackModeState===true)?"secondary":"warning"}  onClick={this.submitAdd}>
                              Add
                            </Button>
                    </Col>
              </Row>
            </div>
            )
          }
        }
      </XConsumer>
      </>
    )
  }
}
export default TodoItemAdd;

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
              <div className="w-100  "  
                style={{ width: '18rem' , 
                              position : "relative" , 
                              margin: "auto"  ,
                              top: "1px" ,
                              backgroundColor:"lightblue"  ,
                              padding: "25px 50px" , 
                              marginTop: "5px"  }}>
              <Row className>
                    <Col className="" xs={2}>
                      <Form.Select className="text-center" onChange={(e) => this.setState({isCompleted : e.target.value})} value={this.state.isCompleted} >
                      <option>isCompleted</option>
                      <option>true</option>
                      <option>false</option>
                      </Form.Select>
                    </Col>
                    <Col xs={9}>
                          <Form.Control as="textarea"  
                            placeholder="To Do" 
                            className="mb-3" 
                            onChange={(e) => this.setState({content : e.target.value})} 
                            value={this.state.Content}/>
                    </Col>
                    <Col xs={1}>
                            <Button variant="warning"  onClick={this.submitAdd}>
                              Add
                            </Button>
                    </Col>
              </Row>
            </div>
            )
          }
        }
      </XConsumer>
      </>
    )
test
*/