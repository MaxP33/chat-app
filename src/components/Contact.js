import React from 'react';
import './Contact.css';

function Contact(props) {
    return (
        <div className="Contact">
            <img src={props.avatar} alt={props.name} className="avatar"/>
            <div>
            <h4 className="name">{props.name}</h4>
            <div className="status">
                <p className={props.online ? 'status-online' : 'status-offline'}></p>
                <p className="status-text">{props.online ? 'online' : 'offline'}</p>
            </div>
            </div>
        </div>
    );
}

export default Contact;