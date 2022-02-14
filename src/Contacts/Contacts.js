import React from "react";
import Button from "../UI/Button";
import classes from "./Contacts.module.css";
import { Link } from "react-router-dom";
const Contacts = (props) => {
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
          <tr>
            <td>1</td>
            <td>Pankaj</td>
            <td>8827611875</td>
            <td>pankaj@gmail.com</td>
            <td>Family</td>
            <td>
              <i class="fa-solid fa-pencil"></i>
            </td>
            <td>
              <i class="fa-solid fa-trash"></i>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Pankaj</td>
            <td>8827611875</td>
            <td>pankaj@gmail.com</td>
            <td>Family</td>
            <td>
              <i class="fa-solid fa-pencil"></i>
            </td>
            <td>
              <i class="fa-solid fa-trash"></i>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};
export default Contacts;
