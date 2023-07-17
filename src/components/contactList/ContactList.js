import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getContacts } from 'redux/contactListSlice/selectors';
import { useEffect } from 'react';
import { getFilters } from 'redux/filterSlice/filterSlice';
import { useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contactListSlice/operation';
import Loader from 'components/Loader/Loader';
import css from './ContactList.module.scss';

function ContactList() {
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilters);

  const { contacts, isLoading, error } = useSelector(getContacts);
  const contactsList = contacts;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    return <div>Error, try again</div>;
  }
  const deleteContactOnClick = id => {
    dispatch(deleteContact({ id: id })).then(() => {
      dispatch(fetchContacts());
    });
  };

  return (
    <ul>
      {isLoading && <Loader />}

      {!(contactsList[0] || isLoading) && (
        <span
          style={{
            fontStyle: 'italic',
            textAlign: 'center',
            display: 'block',
          }}
        >
          Your phonebook is empty
        </span>
      )}
      {contactsList
        .filter(contact =>
          contact.name.toLowerCase().includes(filterContacts.toLowerCase())
        )
        .map(contact => (
          <li key={contact.id}>
            <span className={css.name}>Name: {contact.name}</span>
            <span className={css.number}>Number: {contact.number}</span>
            <button
              className={css.btn}
              onClick={() => {
                deleteContactOnClick(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ContactList;
