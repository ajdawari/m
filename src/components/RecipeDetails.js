import React, { Component } from 'react'


export default class RecipeDetails extends Component {

    state = {
        recipe: {}
        
    }
    
    
 async componentDidMount(){
        const id = this.props.id;

        const  url =  `https://www.food2fork.com/api/get?key=471e27f0a33619a546529ef39316e6a7&rId=${id}`;
       
       
        try{
            let data = await fetch(url);
           
            let jsonData = await data.json();
            console.log('============> recipe ', jsonData);
            
            this.setState({
              recipe: jsonData.recipe
            })
        
        
          }catch(err){
            console.log(err);
          }
    }




    render() {
       
        const {
            image_url,
            ingredients,
            publisher,
            publisher_url,
            source_url,
            title,

        } = this.state.recipe;

        if(!ingredients)
            return <h1 className="text-center bg-warning">Loading...</h1>;

        if(ingredients)
            return (
                <React.Fragment>

                    <div className="container my-5">
                        <button className="btn btn-warning text-capitalize my-4" onClick={() => this.props.handleIndex(1)}>back to recipe list</button>
                        <div className="row">

                            <div className="col-md-6">
                                <img src={image_url} alt="recipe" className="d-block w-100" />
                            </div>

                            <div className="col-md-6">
                                <a href={publisher_url} className="btn btn-primary mx-2">Publisher Url</a>
                                <a href={source_url} className="btn btn-success" >Source Url</a>
                                

                                <h4 className="text-capitalize text-slanted mt-4">{title}</h4>
                                <h6 className="text-warning text-capitalize">Publisher by {publisher}</h6>

                                <ul className="list-group">
                        
                                    {ingredients.map((item, index) =>{

                                    return <li className="list-group-item" key={index}>{item}</li>

                                    })}
                                </ul>
                            </div>
                        </div>


                    </div>
                </React.Fragment>
            )
    }
}

