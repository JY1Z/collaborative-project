import React from 'react';

function Contact({ contact, onDelete }) {
  return (
    <li>
      <p>{contact.name} - {contact.email} - {contact.phone}</p>
      <button onClick={() => onDelete(contact)}>Delete</button>
    </li>
  );
}

export default Contact;