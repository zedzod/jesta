import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import ProfilePage from './ProfilePage';
import Aside from './Aside';
import Footer from './Footer';
import MissionList from './MissionList';
import './Main.css'
import addMission from './addMission'
import searchMission from './searchMission'
import searByPointRange from './searchByPointRange'
import deleteMission from './deleteMission'
 class Main extends Component {

    active = {
       float:"left",
        color: "black",
        fontWeight: "bold"
    };
    header = {
        listStyle: "none",
        display: "flex",

        
    };

  render() {

    return (
      

<div style={this.header}>
         
               
                 <div className="centerLink">
                 
             <Footer/>
               </div>
  
                 
      </div>
    )
  }
}

export default Main;