import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
class searchMission extends Component {


constructor(props){
    super(props);
    this.state={
      editing:true,
      id:5,
      content:[]
    }
    this.edit = this.edit.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderUI   = this.renderUI.bind(this);
    this.save = this.save.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleId = this.handleId.bind(this);

}

edit () {
    this.setState({
      editing:false
    });
  }

  save(e) {
    e.preventDefault();
    this.setState({
      editing:false
    })
  }

  handleId(event) {
    this.setState({ id: event.target.value })
    
}


handleSubmit(event) {

  event.preventDefault();
    let id = this.state.id;
    (async () => {
        const rawResponse = await fetch(`https://jesta.herokuapp.com/getMissionByID/${this.state.id}`, {
           method: 'POST',
           headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       },
             // body: JSON.stringify({id:id})
                     });
        this.state.content = await rawResponse.json();
          console.log(this.state.content)
     })();
            
  }


  renderForm() {
      
    return (
       <div>
        <form action="https://jesta.herokuapp.com/getMissionByID/"
                    method="POST"   onClick={this.handleSubmit}  >
                    
                    
                    <label> INSERT MISSION ID </label><br />
                    <label>
                        ID:
                    <input onChange={this.handleId}
                            value={this.state.id} type="text" name="id"  />
                    </label>

                    <button type="button"  value="Send" onClick={this.edit}>submit</button>
         
        </form>
      </div>

      
    )
    
  }


  renderUI() {
    
   
    return (
        <div>
          <div>{this.props.children}</div>
          <span>
          <div className="card" style={{ width: 18 + 'rem' }}>
            <div className="card-body">
               <h3 >userName: </h3>
               <h4 className="card-title"> {this.state.content[0].userName}</h4>
               <h5>Description: </h5>
               <h6 className="card-text">{this.state.content[0].Description} </h6>
            </div>
          </div>
          </span>
        </div>
    );
  }

  render() {
    return (
        
        
      this.state.editing ? this.renderForm(): this.renderUI()
    )
}


    
    
}

export default searchMission;