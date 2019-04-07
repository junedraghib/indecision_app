import React from 'react'
import Option from "./Option";


const Action = (props) => (
    <div>
        <button
            className='big-button'
            onClick={props.handlePick}
            disabled={!props.hasOptions()}
        >
            What should I do, next??
            </button>
    </div>
);


export default Action