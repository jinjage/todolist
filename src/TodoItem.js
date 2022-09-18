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
class TodoItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      id : '',
      content : '',
      newContent : '',
      isCompleted : '',
      editing : false,
      blackMode : false,
    }
  }
  componentDidMount = () => {
    var {id,content,isCompleted} = this.props;
    
    this.setState({
      //isCompleted : isCompleted,
      id : id,
      content : content,
      newContent : content,
      isCompleted : isCompleted,
    
    });
    //console.log(typeof this.state.isCompleted)
  }
  onClickDelete = async () => {
      console.log("onClickEvent");
      await this.deleteItem(this.state.id);
      //window.refleshgetAllTodosFromApi=1;
      await window.getAllTodosFromApiFunction();
  }
  onChangeisCompleted =async (e) => {
    console.log(e[0]);
    console.log("e[0] => ",e[0],"this.state.isCompleted  => ",this.state.isCompleted);
    if(this.state.isCompleted == true){
      
      await this.updateItem(this.state.id,this.state.content,false);
      this.setState({isCompleted : false});
    }
    else{
      
      await this.updateItem(this.state.id,this.state.content,true);
      this.setState({isCompleted : true});
      console.log("true")
    }
  }
  updateItem = async (id ,content , isCompleted) => {
    var data = JSON.stringify({
      "content": ""+content+"",
      "isCompleted": isCompleted,
      "id": ""+id+""
    });
    var config = {
      method: 'put',
      url: 'https://631ec92558a1c0fe9f57eaf4.mockapi.io/todos/'+id,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    var responseService =  await axios(config);
    console.log(responseService);
  }
  deleteItem = async (id) => {
    var config = {
      method: 'delete',
      url: 'https://631ec92558a1c0fe9f57eaf4.mockapi.io/todos/'+id,
      headers: { }
    };
    var responseService =  await axios(config);
    console.log(responseService);
    //window.appReflesh=1;
    //window.refleshgetAllTodosFromApi=1;
  }
  onClickText = async () => {
    this.setState({editing: true});
  }
  submitEdit = async () => {
      const result = await this.updateItem(this.state.id,this.state.newContent,this.state.isCompleted);
      console.log(result);
      await window.getAllTodosFromApiFunction();
      //window.refleshgetAllTodosFromApi=1; // tüm apiden verileri tekrar çek
      this.setState({editing:false});
  }
  submitCancel = async () => {
    this.setState({editing:false});
    this.setState({newContent:this.state.content});
  }
  //backgroundColor: window.blackModeGlobal===true
  render() {
    return (
      <XConsumer>
        {
          value => {
            const { dispatch ,blackModeState} = value;
            //window.dispatchApp = dispatch;
            //this.deneme = dispatch;
            return (
              <div className = "w-100" 
              style={{ 
                  backgroundColor: (blackModeState===false) ? "#eee" : "black" ,
                  height: "auto"  }} 
              >
            <div className="w-50  "  
                style={{ width: '18rem' , position : "relative" , 
                margin: "auto" ,
                backgroundColor:(true===this.state.isCompleted) ? (blackModeState===false)?"#A1887F":"#8c8f94" :(blackModeState===false)?"lightblue":"#0a4b78"   ,padding: "25px 50px" , marginTop: "1px"  }}>
              <Row>
                    <Col className="" xs={2} >
                    <ToggleButtonGroup type="checkbox"  
                      onChange ={this.onChangeisCompleted}  
                      variant="dark"
                      id = {this.props.id}>
                      <ToggleButton 
                        id={"tbg-btn-true_"+this.props.id} 
                        value={this.state.isCompleted}
                        variant={true==this.state.isCompleted ? "dark" : "primary"}
                      >
                        {true==this.state.isCompleted ? "Not Finished" : "Finised"}
                      </ToggleButton>
                    
                    </ToggleButtonGroup>
                    </Col>
                    <Col xs={9}>
                          <Form.Control as="textarea"  
                            style={{  backgroundColor : (blackModeState===true)?"#a7aaad":null}}
                            placeholder="To Do" 
                            className="mb-3" 
                            onChange={(e) => this.setState({newContent : e.target.value})} 
                            onClick={this.onClickText}
                            value={this.state.newContent}/>
                          {
                            (this.state.editing===true)?
                            <>
                            <Button variant= {(blackModeState===true)?"secondary":"warning"}   onClick={this.submitEdit} >
                              Edit
                            </Button>
                              &nbsp;&nbsp;
                            <Button variant={(blackModeState===true)?"secondary":"warning"}   onClick={this.submitCancel} >
                              Cancel
                            </Button>
                            </>
                            :null
                          }
                    </Col>
                    <Col xs={1}>
                          <CloseButton onClick = {this.onClickDelete}  />
                    </Col>
                    
              </Row>
            </div>
        </div>
            )
          }
        }
      </XConsumer>
      
    )
  }
}
export default TodoItem;
/*

<FloatingLabel
                              controlId="floatingInput"
                              label= {this.state.content}
                              className="mb-3"
                              onClick={this.onClickText}
                              onChange={(e) => this.setState({newContent : e.target.value})} 
                          >
                            <Form.Control type="text"/>
                          </FloatingLabel>


ToggleButtonGroup
<div className="w-50  align-middle text-center fixed-bottom" >
            <Row className>
              <Col className="d-grid gap-1 text-center" xs={1}>
                     <Form.Check 
                        type='checkbox'
                        id="asdas"
                        label=""
                     />
              </Col>
              <Col xs={4}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                
              </Col>
              <Col xs={1}>
              
              </Col>
            </Row>


return (
      <>
      <XConsumer>
        {
          value => {
            const { dispatch ,blackModeState} = value;
            //window.dispatchApp = dispatch;
            //this.deneme = dispatch;
            return (
              
            )
          }
        }
      </XConsumer>
      </>
    )





*/
