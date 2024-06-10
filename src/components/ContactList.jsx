import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";

// Komponent listy kontaktów
const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map((contact, index) => (
      <ContactListItem
        key={index}
        contact={contact}
        onDelete={() => onDeleteContact(index)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
