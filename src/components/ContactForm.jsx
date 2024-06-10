import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Style.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    error: "",
  };

  // Obsługa zmiany wartości w polach formularza
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // Obsługa przesłania formularza
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    // Walidacja pola 'name'
    const namePattern = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    if (!namePattern.test(name)) {
      this.setState({
        error: "Imię musi zawierać imię i nazwisko oddzielone spacją.",
      });
      return;
    }

    // Walidacja pola 'number'
    const phoneNumberPattern = /^[0-9+\-()\s]*$/;
    if (!phoneNumberPattern.test(number)) {
      this.setState({
        error: "Numer może zawierać tylko cyfry, spacje, myślniki i nawiasy.",
      });
      return;
    }

    // Wyczyszczenie błędu i przesłanie formularza
    this.setState({ error: "" });
    this.props.onSubmit({ name, number });
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number, error } = this.state;

    return (
      <div className="ContactForm">
        <form className="ContactForm-form" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Number
            <input
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
              required
            />
          </label>
          {error && <p className="error">{error}</p>}
          <button type="submit">Add contacts</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
