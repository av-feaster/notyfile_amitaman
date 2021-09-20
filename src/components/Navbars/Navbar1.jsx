import React, { useState } from "react";
import logo from "../icon/logo.png";
import { button } from "reactstrap";
import { MdPeople, MdFindInPage } from "react-icons/md";
import "./Navbar1.css";
import { Dropdown } from "./Dropdown";

export const NavBar1 = () => {
 
  return (
    <div className="navbar">
      <div className="content-left">
        <a className="item1" href="#">
          <img src={logo} className="fileimg" alt="Notyfile logo" />
        </a>
        <a className="item2">Notyfile</a>
      </div>
      <div className="content-right">
        <span className="search-box item3">
          <input type="text" placeholder="search here"></input>
          <button class="search-box-img" type="submit">
            <MdFindInPage />
          </button>
        </span>
        <span className="item4"  >
          <button class="button">
            <a className=" profile-icon" href="#">
              Profile
            </a>
            <MdPeople />
          </button>
          
            
        </span>
      </div>
      
    </div>
  );
};



