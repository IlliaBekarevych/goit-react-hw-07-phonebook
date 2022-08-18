import { useGetContactsQuery } from 'redux/contacts/contactsAPI';
import { useSelector } from 'react-redux/es/exports';
import { getFilter } from 'redux/contacts/contact-selectors';
import ContactItem from './ContactItem';
import s from './index.module.css';

function ContactList() {
  const { data, error, isLoading } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  const getVisibleContacts =
    data &&
    data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  return (
    <div>
      {error ? (
        <h2>{error.data}</h2>
      ) : isLoading ? (
        <h2>Loadong...</h2>
      ) : getVisibleContacts?.length ? (
        <ul className={s.list}>
          {getVisibleContacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} number={phone} />
          ))}
        </ul>
      ) : (
        <h2>No contacts</h2>
      )}
    </div>
  );
}

export default ContactList;
