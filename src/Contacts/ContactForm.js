import React, { useState } from "react";
import classes from "./ContactForm.module.css";
import Button from "./../UI/Button";
import { useDispatch } from "react-redux";
import { addContact } from "./../redux/actions/contactActions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";

const ContactForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredContact, setEnteredContact] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredGroup, setEnteredGroup] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const contactChangeHandler = (event) => {
    setEnteredContact(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const groupChangeHandler = (event) => {
    setEnteredGroup(event.target.value);
  };

  const saveContact = async (contact) => {
    const response = await axios
      .post("http://localhost:3000/contacts", contact)
      .catch((err) => {
        console.log("Error : ", err);
      });
    // console.log(response.data);
    dispatch(addContact(response.data));
    navigate("/contacts");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const unique_id = uuid();
    let contact = {
      id: unique_id,
      name: enteredName,
      phone: enteredContact,
      email: enteredEmail,
      group: enteredGroup,
    };
    // console.log(contact);
    // Send post call to backend api for creating contact and dispatch addContact action with response.data
    saveContact(contact);
  };
  return (
    <section className={classes["main-area"]}>
      <div className={classes["contact-form-pannel"]}>
        <form onSubmit={submitHandler}>
          <h2>Add Contact Detail</h2>
          <hr />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={enteredName}
            onChange={nameChangeHandler}
            placeholder="Your name.."
          />

          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={enteredContact}
            onChange={contactChangeHandler}
            placeholder="Your Contact Number.."
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            placeholder="Your Email.."
          />

          <label htmlFor="group">Group</label>
          <select
            id="group"
            name="group"
            value={enteredGroup}
            onChange={groupChangeHandler}
          >
            <option value="family">Family</option>
            <option value="friend">Friend</option>
            <option value="business">Business</option>
          </select>

          <Button
            type="submit"
            className={`${classes.button} ${classes["button-primary"]}`}
          >
            Add Contact
          </Button>
        </form>
      </div>
    </section>
  );
};
export default ContactForm;
