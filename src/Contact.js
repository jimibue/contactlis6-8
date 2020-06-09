import React from "react";
import { Table, Button } from "semantic-ui-react";

const Contact = ({ name, phone, remove, id, editClicked }) => (
  <Table.Row>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button onClick={() => remove(id)} color="red">
        Delete
      </Button>
      <Button onClick={() => editClicked(id)} color="orange">
        Edit
      </Button>
    </Table.Cell>
  </Table.Row>
);

export default Contact;
