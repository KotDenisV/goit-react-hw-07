import { useEffect } from 'react'
import s from './App.module.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { selectLoading } from '../../redux/selectors';
import { fetchContactsThunk } from '../../redux/contactsOps';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <div className={s.appWrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <h1>Loading...</h1>}
      <ContactList />
    </div>
  );
}

export default App
