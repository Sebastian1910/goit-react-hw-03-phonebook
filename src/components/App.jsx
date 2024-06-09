// App.js
import React, { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  // Metoda cyklu życia - ładowanie kontaktów z localStorage po zamontowaniu komponentu
  componentDidMount() {
    const contacts = localStorage.getItem("contacts"); // Pobieranie danych z localStorage
    const parsedContacts = JSON.parse(contacts); // Parsowanie danych z JSON
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts }); // Ustawianie stanu z pobranymi kontaktami
    }
  }

  // Metoda cyklu życia - aktualizacja localStorage po każdej zmianie stanu
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts)); // Zapisywanie kontaktów w localStorage
    }
  }

  // Metoda do dodawania kontaktów
  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    // Sprawdzanie, czy kontakt o danej nazwie już istnieje
    const existingContact = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (existingContact) {
      alert(`${name} is already in contacts`); // Wyświetlanie alertu, jeśli kontakt już istnieje
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts], // Aktualizacja stanu z nowym kontaktem
    }));
  };

  // Metoda do usuwania kontaktów
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId,
      ), // Aktualizacja stanu po usunięciu kontaktu
    }));
  };

  // Metoda do zmiany filtra wyszukiwania
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  // Metoda do filtrowania kontaktów
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
