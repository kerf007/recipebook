import React, { Component } from 'react'
import RecipeListItem from './RecipeListItem'

export default class RecipeList extends Component {

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
