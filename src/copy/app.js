import React from 'react';
import {button} from 'reactstrap'
import {MdPeople,MdFindInPage}from "react-icons/md";
import file from './files.png'
import './app.css'
 function App(){
       // eslint-disable-next-line
     return (
     <div className="navbar">
         <div className="content-left">
         <a className="item1"><img src={file} className="fileimg"/></a>
         <a className="item2">Notyfile</a>
         </div>
         <div className="content-right">
         <span  className="search-box item3"><input type="text" placeholder="search here" ></input>
         <button type="submit"><MdFindInPage/></button>
         </span>
         <span className="item4"><button class="button"><a className=" profile-icon" href="">Profile</a><MdPeople /></button>
         </span>
         </div>
     </div>
     );
 }
 export default App;