import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.itemContact}>
      <div>
        <p>
          <span>
            <FaUser className={css.icon} />
          </span>
          <span>{contact.name}</span>
        </p>
        <p>
          <span>
            <BsFillTelephoneFill className={css.icon} />
          </span>
          <span>{contact.number}</span>
        </p>
      </div>
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
