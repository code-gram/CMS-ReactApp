import React from "react";

const ContactRecord = (props) => {
  const { contact, srNo } = props;
  return (
    <tr>
      <td>{srNo}</td>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td>{contact.group}</td>
      <td>
        <i class="fa-solid fa-pencil"></i>
      </td>
      <td>
        <i class="fa-solid fa-trash"></i>
      </td>
    </tr>
  );
};

export default ContactRecord;
