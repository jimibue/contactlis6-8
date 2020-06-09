import React from "react";
import "./App.css";
import { Container, Header, Segment, Button, Icon } from "semantic-ui-react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";

class App extends React.Component {
  state = {
    contacts: [
      { id: 1, name: "Sally", phone: "800-911-9111" },
      { id: 2, name: "Jill", phone: "8675309" },
      { id: 3, name: "George", phone: "10" },
    ],
    showForm: true,
  };
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };
  addContact = (contact) => {
    let newContact = { id: `${Math.random()}`, ...contact };
    this.setState({ contacts: [newContact, ...this.state.contacts] });
  };
  deleteContact = (id) => {
    const contacts = this.state.contacts.filter((c) => c.id !== id);
    this.setState({
      contacts: contacts,
    });
  };
  render() {
    const { showForm, contacts } = this.state;
    return (
      <Container style={{ paddingTop: "20px" }}>
        <Header as="h1">React Contact List</Header>
        <Segment>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={showForm ? "angle double up" : "angle double down"} />
          </Button>
          {showForm && <ContactForm add={this.addContact} />}
        </Segment>
        <Contacts remove={this.deleteContact} contacts={contacts} />
      </Container>
    );
  }
}

export default App;
