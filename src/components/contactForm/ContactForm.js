// import PropTypes from 'prop-types';
import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactListSlice/selectors';
import { addContact } from 'redux/contactListSlice/operation';

export default function ContactForm() {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const { contacts } = useSelector(getContacts);
  const contactsList = contacts;
  const dispatch = useDispatch();
  const handleChange = e => {
    if (e.target.name === 'name') {
      setUserName(e.target.value);
    } else if (e.target.name === 'number') {
      setUserNumber(e.target.value);
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const newContactName = userName;
    let isContactExist = null;
    if (contactsList[0] !== undefined) {
      isContactExist = contactsList.some(
        contact => contact.name === newContactName
      );
      if (isContactExist) {
        alert(`${newContactName} is already in contacts.`);
        return;
      }
      dispatch(addContact({ name: userName, number: userNumber }));
    } else {
      dispatch(addContact({ name: userName, number: userNumber }));
    }

    setUserName('');
    setUserNumber('');
  };

  return (
    <div className={css.container}>
      <form className={css.container} onSubmit={onSubmitForm}>
        <label style={{ display: 'grid' }}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash, and spaces. For example: John, Anne-Marie, Charles O'Connell"
            required
            value={userName}
            onChange={handleChange}
          />
        </label>
        <label style={{ display: 'grid' }}>
          Phone Number
          <input
            type="tel"
            name="number"
            pattern="[0-9+\- ]+"
            title="Phone number must consist of digits and can contain spaces, dashes, parentheses, and can start with +"
            required
            value={userNumber}
            onChange={handleChange}
          />
        </label>
        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}
// ContactForm.propTypes = {
//   handleValueChange: PropTypes.func.isRequired,
// };
