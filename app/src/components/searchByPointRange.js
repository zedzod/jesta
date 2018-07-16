import React, { Component } from 'react'

class searchByPointRange extends Component{

    constructor(props){
        super(props);
        this.state={

            
        };

    }

    render(){
        return(
      
            <div>
            <form action="https://jesta.herokuapp.com/searchByPointRange/" method="POST" onSubmit={this.handleSubmit}>
                <label> INSERT Range </label><br/>
                <label>
                    Range:
                    <input onChange={this.handleAuthorRankChange} value={this.state.newAuthor} type="text" name="author_rank" />
                  </label>
               
                <input type="submit" value="Send" />
            </form>
            <div id="response">
            </div>
        </div>

        );
    }

}


export default searchByPointRange;