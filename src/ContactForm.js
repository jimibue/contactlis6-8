import React from "react";
import { Form } from "semantic-ui-react";

export default class ContactForm extends React.Component {
  state = {
    name: this.props.contact ? this.props.contact.name : "",
    phone: this.props.contact ? this.props.contact.phone : "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state); // as the new contact
    // we add new contact to state, where do we do that?
    // need to add this to app state
    if (this.props.isEditing) {
      this.props.edit(this.state);
    } else {
      this.props.add(this.state);
    }

    this.setState({
      name: "",
      phone: "",
    });
  };

  handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name Here"
            placeholder="enter name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label="Phone Here"
            placeholder="enter phone #"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}
