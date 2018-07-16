import React, {Component} from 'react'
import Mission from './Mission';
import MdAdd from 'react-icons/lib/md/add'
import './MissionList.css'


class MissionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        MissionsList: [

        ]

    }
    this.eachMission   = this.eachMission.bind(this);
    this.update     = this.update.bind(this);
    this.delete     = this.delete.bind(this);
    this.add        = this.add.bind(this);
    this.nextID     = this.nextID.bind(this);
    //this.addBook    = this.addBook.bind(this);

  }

  add(txt,mission,des,dat,time,points,inviteds) {
      console.log(txt);
    this.setState(prevState => ({
        MissionsList: [
      ...prevState.MissionsList,
      {
          id: this.nextID(),
              userName: txt,
              Mission:mission,
              Description: des,
              Date:dat ,
              Time: time ,
              Points: points,
              Invited:inviteds          
      }]
      
    }))
    console.log(this.state.MissionsList);
  }
  nextID() {
      this.uniqueId = this.uniqueId || 0
      return this.uniqueId++
  }

  update(newMission, i) {
    this.setState(() => ({
        MissionsList: this.state.MissionsList.map(
        (MissionsList) => (MissionsList.id !== i) ? MissionsList : {...MissionsList, name: newMission}
      )
    }))
  }    

  delete(id) {
  }

  componentDidMount() {      
    const url = "https://jesta.herokuapp.com/getAllTasks";

    fetch(url).then((res) => {        
      return res.json();      
    }).then((data) => {        
      var self=this;        
     data.map((mission) => { 
         console.log(mission);           
    self.add(mission.userName, mission.Mission,mission.Description,mission.Date,mission.Time,mission.points,mission.Invited);        
      console.log(mission.Mission);
        })      
    })  
  }

  eachMission (mission,i) {
    return (          
      <div key={'container'+i}className="card" style={{width: 18 + 'rem'}}>
        <div className="card-body" id="card">
          <Mission key={'mission'+i} index={i} onChange={this.update}>
            <h5 className="card-title">{mission.userName}</h5>
            <p className="card-text">{mission.Mission}</p>
            <p className="card-text">{mission.Description}</p>
            <p className="card-text">{mission.Date}</p>
            <p className="card-text">{mission.Time}</p>
            <p className="card-text">{mission.Points}</p>
            <h5>inviteds: </h5>
            <h6 className="card-text">{mission.Invited.map((obj,key)=>{
              return <div key={key}><div>{obj}</div></div>
            })}</h6>         
          </Mission>
        </div>
      </div>
      )
  }

  render() {
      return (
        <div className="mainMissions">
          {this.state.MissionsList.map(this.eachMission)}
         
        </div>
      )
  }
}
export default MissionList;