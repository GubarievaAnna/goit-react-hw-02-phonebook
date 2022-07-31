import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm.jsx';
import Filter from '../Filter/Filter.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFilterSearch = e => {
    this.setState({ filter: e.target.value });
  };

  onAddContact = (name, number) => {
    const repeatOfNames = this.state.contacts.find(el => el.name === name);
    if (repeatOfNames) {
      alert(`${name} is already is in contacts.`);
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, { id: nanoid(), name, number }],
    }));
  };

  onDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <div className={s.container}>
        <h1 className={s.titlePhonebook}>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />
        <h2 classname={s.titleContacts}>Contacts</h2>
        <Filter filter={filter} onFilterSearch={this.onFilterSearch} />
        <ContactList
          filter={filter}
          contacts={contacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
