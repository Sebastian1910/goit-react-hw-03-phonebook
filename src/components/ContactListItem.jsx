import React from "react";
import PropTypes from "prop-types";

// Komponent pojedynczego elementu listy kontaktów
const ContactListItem = ({ contact, onDelete }) => (
  <li>
    {contact.name}: {contact.number}
    <button onClick={onDelete}>Delete</button>
  </li>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
