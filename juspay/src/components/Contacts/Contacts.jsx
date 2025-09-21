import React from 'react';
import { useSelector } from 'react-redux';
import './Contacts.css';
import Female08 from '../../assets/Female08.png';
import Male08 from '../../assets/Male08.png';
import Male06 from '../../assets/Male06.png';
import Female09 from '../../assets/Female09.png';
import Female15 from '../../assets/Female15.png';
import Male04 from '../../assets/3D03.png';
import { selectContacts } from '../../store/slices/sidebarSlice';

const avatarMap = {
  Female08,
  Male08,
  Male06,
  Female09,
  Female15,
  Male04
};

const Contacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div className="contacts-container">
      <h2 className="contacts-title">Contacts</h2>
      <div className="contacts-list">
        {contacts.map((contact) => (
          <div key={contact.id} className="contact-item">
            <img src={avatarMap[contact.avatarKey]} alt="" className="contact-avatar" />
            <span className="contact-name">{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
