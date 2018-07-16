import React,{Component} from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";
import ProfilePage from './ProfilePage'
class Header extends Component{

constructor(props){
    super(props);
}


render(){

    return(
        <div className="header">
        <div className="head"> jesta</div>  
        <div className="login"> <ProfilePage/><h5>Dani Point 25</h5> </div>
       
        </div>
    );
}

}

export default Header;