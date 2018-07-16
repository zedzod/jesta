import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component{

constructor(props){
    super(props);
    this.state={
        year: new Date().getFullYear()
      };
   }

   render(){
    
        return(
         <footer>
             <ul>
                 <li>
                     &copy;{this.year} jesta
                 </li>
             </ul>
         </footer>

        );
    }

}


export default Footer;