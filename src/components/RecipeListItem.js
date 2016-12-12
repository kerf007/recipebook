import React, { Component } from 'react'

export default class RecipeListItem extends Component {
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
