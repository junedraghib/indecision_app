import React from 'react'
import Options from './Options';

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h3>{props.subtitle}</h3>}
        </div>
    );
}

//default props
Header.defaultProps = {
    title: "Indecision!!"
}

export default Header