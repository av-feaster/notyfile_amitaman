import React from 'react';
import {button} from 'reactstrap'
import {MdPeople}from "react-icons/md";
import file from './files.png'
import './app.css'
 function App(){
     //const path="E:\myfrontend\frontend\src\files.png"
     return (
     <div className="navbar">
         <div className="content-left">
         <a className="item1"><img src={file} className="fileimg"/></a>
         <a className="item2">Notyfile</a>
         </div>
         <div className="content-right">
         <input type="text" placeholder="search here" className="search-box"></input>
         <a className="item3" href="">Profile</a>
         <a className="profile-icon"><MdPeople /></a>
         </div>
     </div>
     );
 }
 export default App;