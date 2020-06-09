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
    isEditing: false,
    editContactID: null,
  };
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  editClickHandler = (id) => {
    this.setState({
      isEditing: true,
      showForm: true,
      editContactID: id,
    });
  };
  addContact = (contact) => {
    let newContact = { id: `${Math.random()}`, ...contact };
    this.setState({ contacts: [newContact, ...this.state.contacts] });
  };
  // making the assumption that the param updatedContactInfo =>{name,phone}
  editContact = (id, updatedContactInfo) => {
    const editedContacts = this.state.contacts.map((c) => {
      if (c.id !== id) return c;
      console.log(c);
      console.log(updatedContactInfo);
      return { ...c, ...updatedContactInfo };
    });

    this.setState({
      contacts: editedContacts,
    });
  };
  deleteContact = (id) => {
    const contacts = this.state.contacts.filter((c) => c.id !== id);
    this.setState({
      contacts,
    });
  };
  getContact = () => {
    const { contacts, editContactID } = this.state;
    return contacts.find((c) => (c.id = editContactID));
  };
  render() {
    const { showForm, contacts, isEditing } = this.state;
    const contact = this.state.isEditing ? this.getContact() : null;

    return (
      <Container style={{ paddingTop: "20px" }}>
        <Header as="h1">React Contact List</Header>
        <Segment>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={showForm ? "angle double up" : "angle double down"} />
          </Button>
          {showForm && (
            <ContactForm
              contact={contact}
              getContact={this.getContact}
              isEditing={isEditing}
              edit={this.editContact}
              add={this.addContact}
            />
          )}
        </Segment>
        <Contacts
          remove={this.deleteContact}
          editClicked={this.editClickHandler}
          contacts={contacts}
        />
      </Container>
    );
  }
}

export default App;
