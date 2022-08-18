import { useDispatch, useSelector } from 'react-redux/es/exports';
import { chengeFilter } from 'redux/contacts/contact-actions';
import { getFilter } from 'redux/contacts/contact-selectors';
import s from './index.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <label>
      Find contact by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(chengeFilter(e.target.value))}
      />
    </label>
  );
}


export default Filter;
