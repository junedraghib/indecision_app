import React from 'react'

//REact just seems to be scene here yet we have to import React here

const Option = (props) => (
    <div className='option'>
    
        <p className='option__text'>{props.count}.{props.optionText}</p>
        <button
            // we are defining onClick like this because otherwise onclick will be
            //returning an event object
            className='button button--link'
            onClick={
                (e) => {
                    props.handleDeleteOption(props.optionText);
                }
            }
        >
            Remove
            </button>
    </div>
);

export default Option