import React, { Component } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
    render() {
        
        return (
            <React.Fragment>
                <RecipeSearch handleSubmit={this.props.handleSubmit}  
                    handleChange={this.props.handleChange} 
                    value={this.props.value}
                />

                <div className="container">
                    <h1 className="text-slanted text-center my-5">Recipe List</h1>
                    <div className="row">
                        {
                            this.props.error ? (<h1 className="text-danger">{this.props.error}</h1>) : 
                            this.props.recipes.map((recipe) =>{
                                return <Recipe key={recipe.recipe_id} recipe={recipe} handleDetails={this.props.handleDetails}/>
                            })
                        }
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
