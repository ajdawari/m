import React, { Component } from 'react'

export default class RecipeSearch extends Component {
    render() {
        const {handleChange, handleSubmit, value} = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto mt-5">

                            <h1 className="text-slanted text-capitalize">
                                search for recipe with 
                                 <strong className="text-danger"> food2fork</strong>
                            </h1>

                            <form onSubmit={handleSubmit}>
                                
                                <div className="input-group my-3">
                                    <input type="text" className="form-control" placeholder="chicken,onions,carrots" value={value} onChange={handleChange}/>
                                    <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="submit" >Search</button>
                                    </div>
                                </div>

                            </form>
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
