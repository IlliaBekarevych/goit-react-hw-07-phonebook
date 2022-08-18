import { useDeleteContactMutation } from 'redux/contacts/contactsAPI';
import PropTypes from 'prop-types';
import s from './index.module.css';

function ContactItem({ id, name, number }) {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <li id={id} className={s.item}>
      {name}: {number}
      <button type="button" className={s.btn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
}
ContactItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactItem;
