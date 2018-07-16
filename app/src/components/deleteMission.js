import React, { Component } from 'react'

class deleteMission extends Component{

    constructor(props){
        super(props);
        this.state={
            id:0
        };

    }

    render(){
        return(
      
            <div>
            <form action="https://jesta.herokuapp.com/delete/" method="POST" onSubmit={this.handleSubmit}>
                <label> INSERT MISSION ID TO DELETE </label><br/>
                <label>
                   ID :
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


export default deleteMission;