import React, { Component } from 'react';
import RecipeList from './components/RecipeList'
import AddRecipeButton from './components/AddRecipeButton'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.editItem={};

    let localrecipes = JSON.parse(localStorage.getItem('recipes'));
    this.state = {recipes: localrecipes || []};
  }

  componentDidUpdate() {
    this._updateLocalStorage();
  }

  _updateLocalStorage = () => {
    let data = JSON.stringify(this.state.recipes);
    localStorage.setItem('recipes', data);
  }

  addRecipe = (item) => {
    this.editItem = item || {title:"", ingredients:[]};
    this.refs.modal.openModal();
    this.forceUpdate();
  }

  saveRecipe = (item) => {
    this.setState({recipes:
      (!item.id) ? this.state.recipes.concat({ ...item, id: Date.now()}) :
                   this.state.recipes.map((el,idx) => {
                     if(el.id === item.id) {
                       el.title = item.title;
                       el.ingredients = item.ingredients;
                   }
                   return el;
                 }
                 )
    })
}

  deleteRecipe = (item) => {
    this.setState({recipes:this.state.recipes.filter((el) => el.id !== item.id)});
  }

  render() {
    return (
      <div className="App">
        <h1>Recipe Book</h1>
        <RecipeList recipes={this.state.recipes} onEditClick={this.addRecipe} onDeleteClick={this.deleteRecipe}/>
        <AddRecipeButton onClick={this.addRecipe} />
        <AddRecipeForm  ref="modal" data={this.editItem} onSave={this.saveRecipe}/>
      </div>
    );
  }
}

export default App;
