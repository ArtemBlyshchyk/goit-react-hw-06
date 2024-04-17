import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";

function App() {
  const dispatch = useDispatch();
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  //Функція додавання зміна стану новими даними ФОРМИ
  const onAddContact = (formData) => {
    const newContact = {
      ...formData,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
  };

  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  //Функція фільтрації за фільтраційним словом
  const filteredContacts = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  //Функція видалення контактів
  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox onChange={onChangeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
