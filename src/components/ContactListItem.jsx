import React from "react";

function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
}

export default ContactListItem;
