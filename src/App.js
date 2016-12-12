import React, { Component } from 'react';
import Modal from 'react-modal';
import './App.css';

// init data
var recipes = [
  {id: 1, title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]},
  {id: 2, title: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]},
  {id: 3, title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
];


class RecipeListItem extends Component {
  render() {
    const { title, ingredients, onEdit, onDelete } = this.props;
    return(
        <div>
          <h4>{title}</h4>
          <ul>
            {ingredients.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )
  }
}


class RecipeList extends Component {

  render() {
    const {recipes, onEditClick, onDeleteClick} = this.props;
    return (
       <div>
          {recipes.map((item) =>
            <RecipeListItem
              key={item.id} {...item}
              onEdit={() => onEditClick(item)}
              onDelete={() => {console.log(item); onDeleteClick(item)}}
              />)}
        </div>
      )
  }
}

class AddRecipeForm extends Component {
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
      title: this.refs.input.value,
      ingredients: this.refs.ingredients.value.split(",")
    });
  }

  render() {
    const {title = "", ingredients = []} = this.props;
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

const AddRecipeButton = ({onClick}) => (
  <button className="Add-recipe" onClick={onClick}>Add Recipe</button>
)

class App extends Component {
  constructor(props){
    super(props);
    this.editItem={};
    this.state = {recipes: recipes};
  }


  addRecipe = (item) => {
    this.editItem = item || {title:"", ingredients:[]};
    this.refs.modal.openModal();
    this.forceUpdate();
  }

  saveRecipe = (item) => {
    this.setState({recipes:this.state.recipes.concat({ id: Date.now(), ...item})});
  }

  deleteRecipe = (item) => {
    this.setState({recipes:this.state.recipes.filter((el) => el.id !== item.id)});
  }

  render() {
    return (
      <div className="App">
        <RecipeList recipes={this.state.recipes} onEditClick={this.addRecipe} onDeleteClick={this.deleteRecipe}/>
        <AddRecipeButton onClick={this.addRecipe} />
        <AddRecipeForm  ref="modal" title={this.editItem.title} ingredients={this.editItem.ingredients} onSave={this.saveRecipe}/>
      </div>
    );
  }
}

export default App;
