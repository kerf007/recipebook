import React from 'react'
import { Button } from 'react-bootstrap'

const AddRecipeButton = ({onClick}) => (
  <Button className="Add-recipe" onClick={onClick} bsStyle="info">Add Recipe</Button>
)

export default AddRecipeButton
