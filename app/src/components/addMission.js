import React, { Component } from 'react'

import Main from './Main'
class addMission extends Component{

    constructor(props){
        super(props);
        this.state={
            id: '',
            userName:'',
            Mission:'',
            Description:'',
            Date:'',
            Time:'',
            Points:'',
            Invited:["roni","haim","alon","yaniv" ]
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleId=this.handleId.bind(this);
        this.handleName=this.handleName.bind(this);
        this.handleDate=this.handleDate.bind(this);
        this.handleTime=this.handleTime.bind(this);
        this.handleDescription=this.handleDescription.bind(this);
        this.handleMission=this.handleMission.bind(this);
        this.handlePoints=this.handlePoints.bind(this);
       // this.doPostData=this.doPostData.bind(this);
  
    }
     
    handleId(event){
        this.setState({id: event.target.value})   
     }
     handleName(event){
        this.setState({userName: event.target.value})   
     }
     handleDate(event){
        this.setState({Date: event.target.value})   
     }
     handleTime(event){
        this.setState({Time: event.target.value})   
     }
     handleDescription(event){
        this.setState({Description: event.target.value})   
     }    
     handleMission(event){
        this.setState({Mission: event.target.value})   
     } 
     handlePoints(event){
        this.setState({Points: event.target.value})   
     } 
      

    
     
     handleSubmit(event){
       event.preventDefault();
       let id=this.state.id;
       let userName=this.state.userName;
       let Mission=this.state.Mission;
       let Description=this.state.Description;
       let Date=this.state.Date;
       let Time=this.state.Time;
       let Points=this.state.Points;
       
       this.doPostData(id,userName,Mission,Description,Date,Time,Points,'add/');
        
          
      }


      doPostData (id,userName,Mission,Description,Date,Time,Points,route) {
       
        (async () => {
            const rawResponse = await fetch('https://jesta.herokuapp.com/add', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(this.state)
            });
            const content = await rawResponse.json();
          
            console.log(content);
          })(); 
          
        
        console.log(this.state);
    
      }


    render(){
 
        return(
      
            <div>
            <form action="https://jesta.herokuapp.com/add" method="POST" onSubmit={this.handleSubmit}>
                <label> ADD MISSION </label><br></br>
                <label>
                    ID:
                    <input onChange={this.handleId} 
                    value={this.state.id} type="text" name="id" />
                  </label>
                  <br></br>
                <label> userName:</label>
                    <label>
                    <input onChange={this.handleName} 
                    value={this.state.userName} type="text" name="userName" />
                  </label>
                  <br></br>
                <label>Mission:</label>
                    <label>
                    <input onChange={this.handleMission} 
                    value={this.state.Mission} type="text" name="mission" />
                  </label>
                  <br></br>
                <label>Description :</label>
                    <label>
                    <input onChange={this.handleDescription} 
                    value={this.state.Description} type="text" name="Description" />
                  </label>
                  <br></br>
                  <label>Date: 24/02/1990</label>
                    <label>
                    <input onChange={this.handleDate}
                     value={this.state.Date} type="text" name="Date" />
                  </label>
                  <br></br>
                  <label>Time: 15:30</label>
                  <label>
                    <input onChange={this.handleTime}
                     value={this.state.Time} type="text" name="Time" />
                  </label>
                  <br></br>
                  <label>Points:</label>
                  <label>
                    <input onChange={this.handlePoints}
                     value={this.state.Points} type="text" name="Points" />
                  </label>
                <input type="submit" value="Send"  />
                      
            </form>
            <div id="response">
            </div>
        </div>

        );
    }


}

export default addMission; 