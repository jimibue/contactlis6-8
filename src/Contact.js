import React from "react";
import { Table, Button } from "semantic-ui-react";

const Contact = ({ name, phone }) => (
  <Table.Row>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button color="red"> Delete</Button>
    </Table.Cell>
  </Table.Row>
);

export default Contact;
