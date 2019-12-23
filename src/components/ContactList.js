import React from 'react';
import Contact from './Contact';

const contacts = [
    {
        name: "Sharlene Reynolds",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        online: "online"
    },
    {
        name:"Micheal Burke", 
        avatar:"https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
        name:"Janet Vasquez", 
        avatar:"https://randomuser.me/api/portraits/women/67.jpg", 
        online: "online"
    },
    {
        name:"Lester Richardson",
        avatar:"https://randomuser.me/api/portraits/men/82.jpg",
    },
    {
        name:"Arron Marshall",
        avatar:"https://randomuser.me/api/portraits/men/8.jpg",
        online: "online"
    }
];

const ContactList = () => (
    <div>
        {contacts.map(item => (
            <Contact key={item.name} name={item.name} avatar={item.avatar} online={item.online} />
        ))}
    </div>
);

export default ContactList;
