import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import initialContactsData from "./data/contacts.json";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifyContact = localStorage.getItem("contact");
    //Перший варіант
    if (!stringifyContact) return initialContactsData;
    const parceContact = JSON.parse(stringifyContact);
    /*Другий варіант
    const parceContact = JSON.parse(stringifyContact) ?? initialContactsData;
    */
    return parceContact;
  });

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  //Функція додавання зміна стану новими даними ФОРМИ
  const onAddContact = (formData) => {
    const newContact = {
      ...formData,
      id: nanoid(),
    };
    setContacts((prevContact) => [...prevContact, newContact]);
  };

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  //Функція фільтрації за фільтраційним словом
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  //Функція видалення контактів
  const onDeleteContact = (contactId) => {
    setContacts((prevContact) =>
      prevContact.filter((contact) => contact.id !== contactId)
    );
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
