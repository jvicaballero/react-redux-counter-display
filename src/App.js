import React from 'react';
import './App.css';
import { ValueCounterContainer } from "./components/containers";

/*

We will be making an application that displays a number value to the screen;

This is what we will be able to do as a user:

As a user...

1) I can see the most up-to-date number value on the screen;

2) I can click a button to increment the number value by 1;

3) I can click a button to decrement the number value by 1;

4) I can enter any number (amount) to increase the number value by that amount;

5) I can enter any number (amount) to decrease the number value by that amount;

*/

/*

We will be making an application that displays a number value to the screen

This is what we will be able to do as a user

As a user...

1) I can see the most up-to-date number value on the screen

2)  I can click a button to increment num by 1

3) I can click a button to decrement num by 1

4) I can enter any number to increase the number value by that amount

5) I can enter any number (amount) to decrease the number value by that amount
*/

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <ValueCounterContainer />
      </div>
    </div>
  );
}

export default App;
