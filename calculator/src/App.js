import React, { Component } from 'react';
import './App.css';
import Screen from './Component/Screen';
import ButtonArea from './Component/ButtonArea';


class App extends Component {

  constructor () {
    super();
    this.state = {
      text: '0'
    }
  }

  handleChange = () => {
    return (this.state.text);
  }

  onButtonClick = (event) =>{
    const { text } = this.state;
    const theValue = event.target.value;
    this.setState ({
      text: text === '0'? 
      (theValue === '.' 
        ?text + theValue 
        :theValue )
      : text + theValue });
  }

  handleResult = (event) => {
    let theText = this.state.text;
    let answer = '';
    try {
      eval(theText);
    } catch (error) {
      if(error instanceof SyntaxError) {
        answer = 'Bad Syntax';
      }
    } finally {
      if(answer.length === 0){
        answer = eval(theText) ;
      }
    }
    this.setState ({ text:answer +''});

    console.log(parseFloat(theText));
  }

  handleClear = () =>{ this.setState ({text: '0' })}

  handleDelete = () =>{
    let myText = this.state.text;
    let newText = myText.slice(0, myText.length-1);
    this.setState ({
      text: newText === ''? '0' : newText
    });

  }

  render() {
    return (
      <div className="App">
      <h2 className="f1 yellow" >React Calculator</h2>
        <div className="Calculator">
         
          <Screen handleChange={this.handleChange}/>
          <ButtonArea handleClear = {this.handleClear} handleDelete={this.handleDelete} handleResult={this.handleResult} onButtonClick={this.onButtonClick}/>
        </div>
        <p className="f2 yellow" >Designed by Ted Tran</p>
      </div>
    );
  }
}
export default App;
