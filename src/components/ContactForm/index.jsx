import { useState } from 'react';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsAPI';
import s from './index.module.css';

function ContactForm() {
  const { data } = useGetContactsQuery();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();

  const hendelSubmit = async e => {
    e.preventDefault();
    if (
      data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(name + ' is alredy in contacts');
      return;
    }
    await addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={hendelSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          onChange={e => setNumber(e.target.value)}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={s.formBtn} disabled={isLoading}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
