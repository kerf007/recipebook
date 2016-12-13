import React, { Component } from 'react'

//import Modal from 'react-modal';
import { Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

export default class AddRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      isValidData: false
    };
  }
  openModal = () => {
    this.setState({ modalIsOpen: true,
                    isValidData: false
    });
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

  validateHandler = () => {
    this.setState({...this.state, isValidData: !!(this.input.value && this.ingredients.value) })
  }

  componentDidMount() {
    this.setState({ isValidData: false });
  }

  render() {
    const {title = "", ingredients = []} = this.props.data;
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
                defaultValue={title}
                onChange={this.validateHandler}
                />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Ingredients</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Please add ingredients separated by comma"
                inputRef={(ref) => {this.ingredients = ref}}
                defaultValue={ingredients.join()}
                onChange={this.validateHandler}
              />
            </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onSaveClick} bsStyle="info" disabled={!this.state.isValidData}>Save</Button>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
      </Modal>
    )
  }
}
