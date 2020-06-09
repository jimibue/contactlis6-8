import React from "react";
import { Table, TableHeaderCell } from "semantic-ui-react";
import Contact from "./Contact";

const Contacts = ({ contacts }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <TableHeaderCell>First Name</TableHeaderCell>
        <TableHeaderCell>Phone</TableHeaderCell>
        <TableHeaderCell>Options</TableHeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {contacts.map((contact) => (
        // <Contact key={contact.id} name={contact.name} phone={contact.phone}  />
        <Contact key={contact.id} {...contact} />
      ))}
    </Table.Body>
  </Table>
);

export default Contacts;
