import React from "react";
import Button from "../UI/Button";
import classes from "./Contacts.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ContactRecord from "./ContactRecord";
const Contacts = (props) => {
  const { contacts } = useSelector((state) => state.contacts);
  console.log(contacts);
  return (
    <section className={classes["main-area"]}>
      <div className={classes["section-contacts"]}>
        <Link to="/addcontact">
          {" "}
          <Button
            type="button"
            className={`${classes.button} ${classes["button-primary"]}`}
          >
            Create Contact
          </Button>
        </Link>
        <table id={classes.contacts}>
          <tr>
            <th>Sr#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Group</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>

          {contacts.map((contact, index) => {
            return (
              <ContactRecord
                key={contact.id}
                contact={contact}
                srNo={index + 1}
              />
            );
          })}
        </table>
      </div>
    </section>
  );
};
export default Contacts;
