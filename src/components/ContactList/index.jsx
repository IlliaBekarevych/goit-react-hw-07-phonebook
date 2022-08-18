import { useSelector } from 'react-redux/es/exports';
import { getVisibleContacts } from 'redux/contacts/contact-selectors';
import ContactItem from './ContactItem';
import s from './index.module.css';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

export default ContactList;
