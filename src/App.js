import React, { Component } from 'react';
import './App.css';

// init data
var recipes = [
  {id: 1, title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]}, 
  {id: 2, title: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]}, 
  {id: 3, title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
]; 

class AddRecipeForm extends Component {
  render() {
    const { title, ingredients } = this.props;
    return (
        <form>
          <input type="text" value={title}/>
          <input type="text" value={ingredients.join()}/>
        </form>
      )
  }
}


class RecipeListItem extends Component {
  render() {
    const { title, ingredients } = this.props;
    return(
        <div>
          <h4>{title}</h4>
          <ul>
            {ingredients.map((item, index) => <li key={index}>{item}</li>)}      
          </ul>
          <button>Edit</button>
          <button>Close</button>
        </div>
      )
  }
}


class RecipeList extends Component {
  render() {
    return (
       <div>
          {this.props.recipes.map((item) => <RecipeListItem key={item.id} {...item} />)}
        </div>
      )
  }
}

class AddRecipe extends Component {
  render() {
    return <button className="Add-recipe">Add Recipe</button>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeList recipes={recipes} />
        <AddRecipe />
      </div>
    );
  }
}

export default App;
