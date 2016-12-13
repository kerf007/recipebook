import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//import Modal from 'react-modal';
import { Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

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
    this.props.onSave({
      id: this.props.data.id,
      title: this.input.value,
      ingredients: this.ingredients.value.split(",")
    });
    this.closeModal();
  }

  render() {
    const {title = "", ingredients = []} = this.props.data;
    console.log(title, ingredients);
    return (
      <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{(!title) ? "Add a recipe" : "Edit recipe"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
            <FormGroup>
              <ControlLabel>Recipe</ControlLabel>
              <FormControl
                componentClass="input"
                placeholder="Enter recipe title"
                inputRef={(ref) => {this.input = ref}}
                defaultValue={title}/>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Ingredients</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Please add ingredients separated by comma" inputRef={(ref) => {this.ingredients = ref}} defaultValue={ingredients.join()}/>
            </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onSaveClick} bsStyle="info">Save</Button>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
      </Modal>
    )
  }
}
