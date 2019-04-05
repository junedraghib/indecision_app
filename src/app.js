import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'


const jsx = (
    <div>
        <IndecisionApp options={["first", "second"]} />
    </div>
);

ReactDOM.render(jsx, document.getElementById("approot"))





















// //importing default exports
// // import './utils.js';
// //importing named exports : we have to use the same name that is defined in their root file
// import { square, add } from './utils.js'

// console.log("app.js is running!!")
// console.log(square(4))
// console.log(add(4, 5))

// import {isAdult, canDrink} from './person.js'

// console.log(isAdult(21))
// console.log(canDrink(22))

// import validator from 'validator';

// console.log(validator.isEmail("raghibjuned@gmail.com"))