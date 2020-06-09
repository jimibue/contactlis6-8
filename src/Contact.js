import React from "react";
import { Table, Button } from "semantic-ui-react";

const Contact = ({ name, phone, remove, id }) => (
  <Table.Row>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button onClick={() => remove(id)} color="red">
        Delete
      </Button>
    </Table.Cell>
  </Table.Row>
);

export default Contact;
