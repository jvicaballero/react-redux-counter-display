import React, { Component } from "react";
import { ValueCounterView } from "../views";
import { connect} from "react-redux"

import {incrementByOne,incrementByAmount,decrementByOne,decrementByAmount} from "../../store/utilities/counterValue"
                               //                 ^                  //   ^
//Error: handle decrementByOne undef: add decrementByone on import above |
//redux fires first
//rest of lifecycle fires off after (constructor, etc....)
/*

I want to keep my view layer as my view layer (ReactJS);

But...I still would like to have state management (Redux);

Therefore, I will incorporate Redux in order to keep track of (and modify) the number value;

If I am to use Redux, then I need to have this component connected to (subscription) the Redux store;

This gives me a heads-up that indicates we will use connect() in this smart container;

I will be about to read from (mapState) the Redux store and write to (mapDispatch) the Redux store;

*/

class ValueCounterContainer extends Component {
  constructor(props) {
    console.log("in constructor")
    super(props);
    this.state = {
      amountToIncrementBy: 0,
      amountToDecrementBy: 0,
    }
    console.log(this.props)
  }

  handleIncrementByOne = () => {
    this.props.incrementByOne();
  }

  handleDecrementByOne = () => {
    this.props.decrementByOne();
  }

  handleIncrementByAmount = () => {
    this.props.incrementByAmount(this.state.amountToIncrementBy);
  }

  handleDecrementByAmount = () => {
    this.props.decrementByAmount(this.state.amountToDecrementBy);
  }

  handleIncrementChange = (event) => {
    this.setState({amountToIncrementBy: Number(event.target.value)});
  }

  render() {
    console.log("in render")
    return (
      <div>
    <ValueCounterView counterValue={this.props.counterValue} handleIncrementByOne={this.handleIncrementByOne()} handleDecrementByOne={this.handleDecrementByOne}/>
    <label>Add Any amount: </label>
    <input type="text" name="amountToIncrementBy" value={this.state.amountToIncrementBy} onChange={this.handleIncrementChange}></input>
    <button onClick={this.handleIncrementByAmount}>Add By This Value</button>

    <input type="text" name="amountToDecrementBy" value={this.state.amountToDecrementBy} onChange={this.handleDecrementChange}></input>
    <button onClick={this.handleIncrementByAmount}>Subtract by this</button>
    </div>
    )
}
}
/*
Down here, I will handle reading (mapState) and writing (mapDispatch) in regards to redux store
More specifically, I want to be able to interact with reducer function (valueCounterReducer) we wrote in the store

*/
//This will create, at this point, an object that has a key called currentValue and a value for key counterValueReducer
function mapState(state){
  console.log("in mapState")
  console.log("redux store looks like this", state)
  return{
    counterValue: state.counterValue
  }
}

//store cannot read functions incrementByOne, must pass in an action incrementByOne()
function mapDispatch(dispatch){
  return {
    incrementByOne: () => dispatch(incrementByOne()),
    decrementByOne: () => dispatch(decrementByOne()),
    incrementByAmount: (amount) => dispatch(incrementByAmount(amount))
  }
}


//We establish a connection(subscription) to redux store
//Here, we will take the this.props objject of component and merge it with the object from mapState
//this.props + {currentValue: state.counterValueReducer, incrementByOne: () => dispatch(incrementByOne)}
//The above "+" sign indicates merging of two objects
export default connect(mapState,mapDispatch)(ValueCounterContainer);