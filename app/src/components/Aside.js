import  React, { Component } from 'react'
import './Aside.css';
import ProfilePage from './ProfilePage';
import { NavLink } from "react-router-dom";
import MissionList from './MissionList';
import addMission from './addMission'
import searchMission from './searchMission'
import searchByPointRange from './searchByPointRange'
import deleteMission from './deleteMission'
class Aside extends Component {
  render() {
    return (
        
      <div className="mainAside">
        
        <NavLink className="navAside" exact to="/" activeStyle={this.active}>
                Home
         </NavLink>

                <NavLink className="navAside" to="/getAllMission" Component={MissionList}>
             getAllMission
                </NavLink>

            
                <NavLink className="navAside" to="/add" Component={addMission}>
             createMission
                </NavLink> 

                 <NavLink className="navAside" to="/getMissionByID" Component={searchMission}>
             getMissionbyId 
                </NavLink>
                <NavLink className="navAside" to="/searchByPointRange" Component={searchByPointRange}>
             searchByPointRange
                </NavLink>
                <NavLink className="navAside" to="/delete" Component={deleteMission}>
             deleteMission
                </NavLink>
        
        
      </div>
    )
  }
}


export default Aside;