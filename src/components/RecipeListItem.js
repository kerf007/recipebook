import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Panel, ButtonToolbar, Button } from 'react-bootstrap'

export default class RecipeListItem extends Component {
  render() {
    const { title, ingredients, onEdit, onDelete } = this.props;
    return(
        <Panel collapsible header={title} >
          <h4>Ingredients</h4>
          <ListGroup>
            {ingredients.map((item, index) =>
              <ListGroupItem key={index}>{item}</ListGroupItem>)}
          </ListGroup>
          <ButtonToolbar>
            <Button onClick={onEdit} bsStyle="info">Edit</Button>
            <Button onClick={onDelete} bsStyle="danger">Delete</Button>
          </ButtonToolbar>
        </Panel>
      )
  }
}
