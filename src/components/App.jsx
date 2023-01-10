import React, { Component } from 'react';
import { Form } from './Form/Form';

import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = date => {
    this.setState(prevState => {
      const names = [];

      prevState.contacts.map(contact => {
        return names.push(contact.name);
      });

      if (names.includes(date.name)) {
        return alert(`${date.name} is already in contacts`);
      }

      return { contacts: [date, ...prevState.contacts] };
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      return this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;

    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>

        <Form onSubmit={this.formSubmitHandler} />

        <h2>Contacts:</h2>
        <Filter value={filter} onChange={this.filterChange} />

        <ContactsList
          contacts={filteredContacts}
          onDeletContact={this.deleteContact}
        />
      </div>
    );
  }
}
