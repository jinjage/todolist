import React, { Component } from 'react'
const XContext = React.createContext();
const reducer = (state, action) => {
    if(action.islemTipi=="blackModeStateTrue")
      return {blackModeState: true};
    else
    if(action.islemTipi=="blackModeStateFalse")
      return {blackModeState: false};

  }
export class XProvider extends Component {
    state = {  
                blackModeState : false,
                dispatch : action => { this.setState(state => reducer(state,action))}
    }
    render() {
        return (
            <XContext.Provider value={this.state}>
                {this.props.children}
            </XContext.Provider>
        )
    }
}
const XConsumer = XContext.Consumer;
export default XConsumer;


/*
contexti alacak yer

örnek:

return (
      <>
      <XConsumer>
        {
          value => {
            const { dispatch } = value;
            window.dispatchApp = dispatch;
            //this.deneme = dispatch;
            return (
              <>
                  <Router>
                    <Switch>
                      <Route path="/:id" children={<Kullanici />} />
                    </Switch>
                  </Router>
              </>
            )
          }
        }
      </XConsumer>
      </>
    )



*/