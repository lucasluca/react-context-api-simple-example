import React, { Component } from 'react';
import Input from './input'

const MyContext = React.createContext()

class MyProvider extends Component {
  state = {
    name: 'Lucas Mendes :smile:',
    job: 'Dev 💻',
    age: 25
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        envelhecer: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <Input/>
          <hr/>
          <hr/>
          <hr/>
          <Pai/>
          <hr/>
          <Filho/>
          <hr/>
          <Neto/>
        </div>
      </MyProvider>
    );
  }
}

class Pai extends Component {
  render() {
    return (
      <h1>Ola Mundo😄</h1>
            
        )
  }
}

class Filho extends Component {
  render() {
    return (
      <h1>Filho 🚸</h1>
    )
  }
}

class Neto extends Component {
  render() {
    return (
      <div>
        <h1>Dados devem chegar aqui 👶</h1>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Nome: // {context.state.name}</p>
              <p>JOB: // {context.state.job}</p>
              <p>Idade: // {context.state.age}</p>
              <button onClick={context.envelhecer}>🍰 Envelhecer</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

