import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faDigitalTachograph, faIceCream, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => (
    <div className='footer' >
        <div className='container'>
            {props.subtitle && <h3 className='footer__subtitle'>{props.subtitle}</h3>}
            <h1 className='footer__title'>{props.title}</h1>
            {props.links && 
                <div className="footer__icons">

                    <a href={props.links.github}>
                        <FontAwesomeIcon icon={faGithubAlt} className="footer__icon" />
                    </a>    

                    <a href={props.links.linkedin}>
                        <FontAwesomeIcon icon={faLinkedin} className="footer__icon" />
                    </a> 

                    <a href={props.links.gmail}>
                        <FontAwesomeIcon icon={faEnvelope} className="footer__icon" />
                    </a> 
                    

                </div>}
        </div>
    </div>
);

//default props
Footer.defaultProps = {
    title: "Indecision!!"
}

export default Footer