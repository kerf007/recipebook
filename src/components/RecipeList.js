import React, { Component } from 'react'
import { Accordion, Panel } from 'react-bootstrap'
import RecipeListItem from './RecipeListItem'

export default class RecipeList extends Component {

  render() {
    const {recipes, onEditClick, onDeleteClick} = this.props;
    return (
      <Panel>
         {recipes.length ?
         <Accordion>
            {recipes.map((item) =>
                <RecipeListItem
                  key={item.id} {...item}
                  onEdit={() => onEditClick(item)}
                  onDelete={() => {console.log(item); onDeleteClick(item)}}
                  />)}
          </Accordion>
          :
          <span bsSize="large">Recipes not added yet</span>
          }
        </Panel>
      )
  }
}
