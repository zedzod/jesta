import React from "react";
import { Route } from "react-router-dom";
import Main from '../components/Main';
import Aside from '../components/Aside'
import Header from '../components/Header';
import MissionList from '../components/MissionList';
import addMission from '../components/addMission'
import searchMission from '../components/searchMission'
import searchByPointRange from '../components/searchByPointRange'
import deleteMission from '../components/deleteMission'
import Footer from '../components/Footer'
const ReactRouter =()=>{
    return (
        <div>
        <React.Fragment>
            <Header />
            <Aside/>
            <Route exact path="/" component={Main} />
            <Route exact path="/getAllMission" component={MissionList} />
            <Route exact path="/add" component={addMission} />
            <Route exact path="/getMissionByID" component={searchMission} />
            <Route exact path="/searchByPointRange" component={searchByPointRange} />
            <Route exact path="/delete" component={deleteMission} />
            
                
        </React.Fragment>
           
        </div>
    );}

export default ReactRouter;
