import React, { Component } from 'react'
import './App.css'
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


export default class App extends Component {

  state = {
    recipes: [],
    url: "https://www.food2fork.com/api/search?key=93e026bf9527a5a27f718b9ba321ccdc",
    
    recipe_id: 0,

    page_index: 1,
    base_url: "https://www.food2fork.com/api/search?key=93e026bf9527a5a27f718b9ba321ccdc",
    search: '',
    query: '&q=',
    error: ''
  }
  

  async getRecipes(){

    try{

      let data = await fetch(this.state.url);
      
      let jsonData = await data.json();
  
      console.log('-------Recipes----- ', jsonData);

      if(jsonData.recipes.length === 0){
          this.setState(() => {
            
            return {error: 'sorry, but your search did note return a result'}

          })

      }else{

        this.setState({
          recipes: jsonData.recipes
        })
        
      }
      
        
      }catch(err){
            console.log(err);
      }
        
  }


  componentDidMount(){
    this.getRecipes();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {base_url, query, search} = this.state;

    this.setState(() =>{
      return{url:`${base_url}${query}${search}`, search:''}
    }, ()=>{
        this.getRecipes();
    });

  }


  handleChange = (e) => {

    this.setState({search: e.target.value});
  }

  handleIndex = index => {

    this.setState({
      page_index: index,
    });

  }

  handleDetails = (p_index, id) => {

    this.setState({
      page_index: p_index,
      recipe_id: id,
    });
  }

  displayPage(index){

    switch(index){
      default:
      case 1 : 
        return (<RecipeList 
          recipes={this.state.recipes} 
          handleDetails={this.handleDetails} 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.search}
          error={this.state.error}
          
        />);

      case 0 : 
        return ( <RecipeDetails handleIndex={this.handleIndex} id={this.state.recipe_id}/>);
    }

  }


 
  
  render() {

    return (
      <React.Fragment>
          {this.displayPage(this.state.page_index)}
      </React.Fragment>

    )
  }
}
