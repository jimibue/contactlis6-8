import React from "react";
import "./App.css";
import { Container, Header } from "semantic-ui-react";
import Contacts from "./Contacts";

class App extends React.Component {
  state = {
    contacts: [
      { id: 1, name: "Sally", phone: "800-911-9111" },
      { id: 2, name: "Jill", phone: "8675309" },
      { id: 3, name: "George", phone: "10" },
    ],
  };
  render() {
    return (
      <Container>
        <Header as="h1">React Contact List</Header>
        <Contacts contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
