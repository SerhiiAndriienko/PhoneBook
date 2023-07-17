import { useAuth } from 'hooks';
import ContactList from '../../components/contactList/ContactList';
import Loader from 'components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import ContactForm from 'components/contactForm/ContactForm';
import Filter from 'components/filter/Filter';
import { setFilterSlice } from 'redux/filterSlice/filterSlice';
import { getContacts } from 'redux/contactListSlice/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const {
    user: { isRefreshing },
  } = useAuth();
  const { contacts } = useSelector(getContacts);
  const filterChange = filterValue => {
    dispatch(setFilterSlice(filterValue));
  };

  if (isRefreshing) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <ContactForm></ContactForm>
      {contacts[0] && <Filter filterChange={filterChange}></Filter>}
      <ContactList></ContactList>
    </div>
  );
}

// krinn123@meta.com
// 123123123
