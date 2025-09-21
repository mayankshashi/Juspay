import React from 'react';
import './Contacts.css';
import Female08 from '../../assets/Female08.png';
import Male08 from '../../assets/Male08.png';
import Male06 from '../../assets/Male06.png';
import Female09 from '../../assets/Female09.png';
import Female15 from '../../assets/Female15.png';
import Male04 from '../../assets/3D03.png';


const Contacts = () => {
  const contacts = [
    {
      id: 1,
      name: 'Natali Craig',
      avatar: Female08
    },
    {
      id: 2,
      name: 'Drew Cano',
      avatar: Male08
    },
    {
      id: 3,
      name: 'Orlando Diggs',
      avatar: Male06
    },
    {
      id: 4,
      name: 'Andi Lane',
      avatar: Female09
    },
    {
      id: 5,
      name: 'Kate Morrison',
      avatar: Female15
    },
    {
      id: 6,
      name: 'Koray Okumus',
      avatar: Male04
    }
  ];

  return (
    <div className="contacts-container">
      <h2 className="contacts-title">Contacts</h2>
      <div className="contacts-list">
        {contacts.map((contact) => (
          <div key={contact.id} className="contact-item">
            <img src={contact.avatar} alt="" className="contact-avatar" />
            <span className="contact-name">{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
