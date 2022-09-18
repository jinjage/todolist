import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import XConsumer from './Context.js';
class Header extends Component {
    state = {
        user : '',
        blackMode : false,
    }
    componentDidMount(){
        this.setState({user : localStorage.getItem('username')});
        console.log("Headerstate :",localStorage.getItem('username'));
    }
    addFunction=()=>{
        console.log("stateden çekince" , this.state.user);
        //window.YeniDuyuruModdleStatus = true;
        window.YeniDuyuruModdleShow();
  
    }
    signOutFunction(){
        localStorage.setItem('username', '');
        localStorage.setItem('session', '');
        console.log("oturum sonlandi");
        window.appReflesh=1;
    }
    blackModeOnClick = () => {
        this.setState({blackMode:!this.state.blackMode})
        if(window.blackMode===false)
            window.dispatchApp({ islemTipi: "blackModeStateTrue", payload: null });
        else
            window.dispatchApp({ islemTipi: "blackModeStateFalse", payload: null });
    }

    render() {
        return (
            <>
            <XConsumer>
              {
                value => {
                  const { dispatch ,blackModeState} = value;
                  console.log("black Mode State : ",blackModeState);
                  window.dispatchApp = dispatch;
                  window.blackMode = blackModeState;
                  //this.setState({blackMode: blackModeState});
                  //this.deneme = dispatch;
                  return (
                    <>
                      <Navbar bg="light" expand="lg" style = {{margin: 0 , padding : 0}} >
                          <Container fluid  style={ (blackModeState===true)?{ backgroundColor: "black" ,color :"white" }:null}>
                              <Navbar.Brand href="" disabled style={(blackModeState===true)?{ backgroundColor: "black" ,color :"white" }:null}>Todo List</Navbar.Brand>
                              <Navbar.Toggle aria-controls="navbarScroll" style={(blackModeState===true)?{ backgroundColor: "black" ,color :"white" }:null}> </Navbar.Toggle>
                              <Navbar.Collapse id="navbarScroll">
                                  <Nav
                                      className="me-auto my-2 my-lg-0"
                                      style={{ maxHeight: '100px' }}
                                      style={(blackModeState===true)?{ backgroundColor: "black" ,color :"white" }:null}
                                      navbarScroll
                                  >
                                      <Nav.Link disabled >...</Nav.Link>
                                      <Nav.Link url="#action2" disabled>.</Nav.Link>
      
                                      <Nav.Link url="#" disabled>
                                          &nbsp;&nbsp;&nbsp;
                                      </Nav.Link>
      
                                      <Nav.Link url="#" enabled="true" onClick={this.addFunction} style={(blackModeState===true)?{ backgroundColor: "black" ,color :"white" }:null}>
                                          Todo Add
                                      </Nav.Link>
                                      <Nav.Link url="#" enabled="true" onClick={this.signOutFunction} style={(blackModeState===true)?{ backgroundColor: "black" ,color :"white" }:null}>
                                          Sign Out
                                      </Nav.Link>
      
                                      <Nav.Link url="#" enabled="true" 
                                        onClick={this.blackModeOnClick}
                                        style={(blackModeState===true)?{ backgroundColor: "black" ,color :"white" }:null}
                                        >
                                          {(!blackModeState ===false)?"BlackModeOff":"BlackModeActive"} 
                                      </Nav.Link>
                                  </Nav>
                                  
                                  <Form className="d-flex">
                                      Kullanıcı :&nbsp;&nbsp; <b>{this.state.user}</b>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      
                                  </Form>
                              </Navbar.Collapse>
                          </Container>
                      </Navbar>
                  </>
                  )
                }
              }
            </XConsumer>
            </>
        )
    }
}
export default Header;
//  <Nav.Link url="#" disabled onClick={this.submitFunction}> disabled => enabled edince kızıyor

/*
contexti alacak yer

örnek:

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
                <Navbar bg="light" expand="lg" style={{ backgroundColor: "#eee" }} >
                    <Container fluid>
                        <Navbar.Brand href="" disabled>Todo List</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link disabled >...</Nav.Link>
                                <Nav.Link url="#action2" disabled>.</Nav.Link>

                                <Nav.Link url="#" disabled>
                                    &nbsp;&nbsp;&nbsp;
                                </Nav.Link>

                                <Nav.Link url="#" enabled="true" onClick={this.addFunction}>
                                    Todo Add
                                </Nav.Link>
                                <Nav.Link url="#" enabled="true" onClick={this.signOutFunction}>
                                    Sign Out
                                </Nav.Link>

                                <Nav.Link url="#" enabled="true" onClick={this.blackModeOnClick}>
                                    {(!this.state.blackMode ===false)?"Black Mode":"Normal Mode"} 
                                </Nav.Link>
                            </Nav>
                            
                            <Form className="d-flex">
                                Kullanıcı :&nbsp;&nbsp; <b>{this.state.user}</b>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
            )
          }
        }
      </XConsumer>
      </>
    )


    eski hali


     <>
                <Navbar bg="light" expand="lg" style={{ backgroundColor: "#eee" }} >
                    <Container fluid>
                        <Navbar.Brand href="" disabled>Todo List</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link disabled >...</Nav.Link>
                                <Nav.Link url="#action2" disabled>.</Nav.Link>

                                <Nav.Link url="#" disabled>
                                    &nbsp;&nbsp;&nbsp;
                                </Nav.Link>

                                <Nav.Link url="#" enabled="true" onClick={this.addFunction}>
                                    Todo Add
                                </Nav.Link>
                                <Nav.Link url="#" enabled="true" onClick={this.signOutFunction}>
                                    Sign Out
                                </Nav.Link>

                                <Nav.Link url="#" enabled="true" onClick={this.blackModeOnClick}>
                                    {(!this.state.blackMode ===false)?"Black Mode":"Normal Mode"} 
                                </Nav.Link>
                            </Nav>
                            
                            <Form className="d-flex">
                                Kullanıcı :&nbsp;&nbsp; <b>{this.state.user}</b>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

*/