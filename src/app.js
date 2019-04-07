import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

const jsx = (
    <div>
        <IndecisionApp options={["first", "second"]} />
    </div>
);


// const Layout = (props) => {
//     return(
//         <div>
//             <p>heder</p>
//             {props.children}
//             <p>footer</p>
//         </div>
//     );
// }

// const template = (
//     <div>
//         <h1>Page title</h1>
//         <p>This is my page</p>
//     </div>
// )

//     < Layout >
//     <h1>Page title</h1>
//     <p>This is my page</p>
//     </Layout >

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