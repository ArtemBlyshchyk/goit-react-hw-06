import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.listContact}>
      {Array.isArray(contacts) &&
        contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </ul>
  );
};

export default ContactList;
