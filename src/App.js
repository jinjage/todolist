import Header from './Header.js'
import React, { Component } from 'react'
import UserLogin from './UserLogin.js';
import TodoList from './TodoList.js'
import TodoItem from './TodoItem.js'
import TestComponent from './TestComponent.js'
import ModalBindTodoItemAdd from './ModalBindTodoItemAdd.js'


class App extends Component {
  state = {};
  componentDidMount=() => {
    window.appRefleshFunction =this.appRefleshFunction;

    //console.log(localStorage.getItem('username'));
    setInterval(async () => {
      if(localStorage.getItem('session')=="x"){
        console.log(localStorage.getItem('username'));
        localStorage.setItem('session', "true");
        this.setState({});
      }
      if(window.appReflesh===1){
        console.log("Listener say : window.appReflesh===1");
        await this.setState({x:1}); // sayfayı yeniliyor
        window.appReflesh='';
      }
    });
  }
  appRefleshFunction = () =>{
        console.log("appRefleshFunction çalıştı");
        this.setState({x:1}); // sayfayı yeniliyor

  }

  render() {
    if(localStorage.getItem('session')=="true")
      return(
        <>
          <ModalBindTodoItemAdd/>
          <Header/>
          <TodoList/>
        </>
      )
    else
      return (
          <>
          <ModalBindTodoItemAdd/>
          <UserLogin/>
          </>
          
      )
  }
}

export default App;

/*
<Header/>
 <Ekle/>

 <Header/>
          <TodoList/>

           <TodoList/>
          <TestComponent/>

*/
