import React, { Component } from 'react';
import Header from './Header.js';
import TodoItem from './TodoItem.js'
import axios from 'axios'
import XConsumer from './Context.js';

class TodoList extends Component {
  state = {
    array : []
  }

  componentDidMount = async ()=>{
    await this.getAllTodosFromApi();
    /*
    setInterval(async () => {
      
      if(window.refleshgetAllTodosFromApi===1){
        console.log("Listener say : window.refleshgetAllTodosFromApi===1");
        await this.getAllTodosFromApi(); // sayfayı yeniliyor
        window.refleshgetAllTodosFromApi='';
      }
    },1000);
    */
    window.getAllTodosFromApiFunction = this.getAllTodosFromApi;
  }
  getAllTodosFromApi = async () => {
    var config = {
      method: 'get',
      url: 'https://631ec92558a1c0fe9f57eaf4.mockapi.io/todos/',
      headers: { }
    };
    const response = await axios(config);
    console.log(response.data);
    this.setState({array : response.data})
  } 
  render() {
    const array = this.state.array;
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
                      <div style={{ backgroundColor:(blackModeState===false) ? "#eee" : "black" }} >
                        {
                          array.map(
                            item => {
                              return(
                                <TodoItem
                                  id={item.id}
                                  content = {item.content}
                                  isCompleted = {item.isCompleted}
                                  key = {item.id}
                                />
                              )
                            }
                          )
                        }
                      </div>
                    </>
            )
          }
        }
      </XConsumer>
      </>
    )
  }
}
export default TodoList;

/*

, height:"100vh" ,width: "100vw"
className = "w-100" 



propslar

        "content": "content 1",
        "isCompleted": false,
        "id": "1"


var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://631ec92558a1c0fe9f57eaf4.mockapi.io/todos/',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


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
