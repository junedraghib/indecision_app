import React from 'react'

//REact just seems to be scene here yet we have to import React here

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                // we are defining onClick like this because otherwise onclick will be
                //returning an event object
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
}

export default Option