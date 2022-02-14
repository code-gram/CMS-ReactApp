import React from "react";
import classes from "./ContactForm.module.css";
import Button from "./../UI/Button";

const ContactForm = (props) => {
  return (
    <section className={classes["main-area"]}>
      <div className={classes["contact-form-pannel"]}>
        <form>
          <h2>Add Contact Detail</h2>
          <hr />
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." />

          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="Your Contact Number.."
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email.."
          />

          <label htmlFor="group">Group</label>
          <select id="group" name="group">
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
