import css from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const contactUserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required!")
    .min(3, "Too short!")
    .max(50, "Too long!"),
  number: Yup.string()
    .required("Required!")
    .min(3, "Too short!")
    .max(50, "Too long!"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  //Функція додавання зміни стану новими даними ФОРМИ
  const onAddContact = (formData) => {
    const newContact = {
      ...formData,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
  };

  //Функція для збору інформації з форми
  const handeSubmit = (value, actions) => {
    onAddContact(value);
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handeSubmit}
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={contactUserSchema}
    >
      <Form className={css.container}>
        <label>
          <span>Name</span>
          <br />
          <Field type="text" name="name" placeholder="Enter user name" />
          <ErrorMessage component="p" name="name" className={css.error} />
        </label>
        <label>
          <span>Number</span>
          <br />
          <Field type="text" name="number" placeholder="Enter user number" />
          <ErrorMessage component="p" name="number" className={css.error} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
