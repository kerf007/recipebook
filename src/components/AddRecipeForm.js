import React, { Component } from 'react'
import Modal from 'react-modal';

export default class AddRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }
  openModal = () => {
    this.setState({ modalIsOpen: true});
  }
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  onSaveClick = () => {
    this.closeModal();
    this.props.onSave({
      id: this.props.data.id,
      title: this.refs.input.value,
      ingredients: this.refs.ingredients.value.split(",")
    });
  }

  render() {
    const {title = "", ingredients = []} = this.props.data;
    console.log(title, ingredients);
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        // onAfterOpen={() => ()}
        onRequestClose={this.closeModal}
        // style={customStyle}
        contentLabel="Example Modal"
      >
        <h1>{(!title) ? "Add a recipe" : "Edit recipe"}</h1>
        <input placeholder="Enter name here" defaultValue={title} ref="input"/><br />
        <textarea placeholder="Please add ingredients separated by comma" defaultValue={ingredients.join()} ref="ingredients" rows={5}/><br />
        <button onClick={this.onSaveClick}>Save</button>
        <button onClick={this.closeModal}>Close</button>
      </Modal>
    )
  }
}
