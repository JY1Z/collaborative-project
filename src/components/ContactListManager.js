import React, { useState } from 'react';
import './ContactListManager.css';
import Contact from './Contact';

function ContactListManager() {
  // State to manage contact list and form input values
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Handle input changes (controlled form)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to add a new contact
  const addContact = (e) => {
    e.preventDefault(); // Prevent form submission reload
    setContacts([...contacts, formData]); // Add the new contact to the list
    setFormData({ name: '', email: '', phone: '' }); // Reset form
  };

  // Function to delete a contact
  const deleteContact = (contact) => {
    const updatedContacts = contacts.filter((c) => c !== contact);
    setContacts(updatedContacts);
  };

  return (
    <div className="contact-list-manager">
      <h2>Contact List Manager</h2>

      {/* Contact Form */}
      <form onSubmit={addContact}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]*" // Ensures only digits
            title="Please enter a valid phone number (numbers only)"
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>

      {/* Render Contact List */}
      <h3>Contact List</h3>
      <ul>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <Contact key={contact.name} contact={contact} onDelete={deleteContact} />
          ))
        ) : (
          <p>No contacts available</p>
        )}
      </ul>
    </div>
  );
}

export default ContactListManager;