import React from 'react';
import logo from "./icon/logo.png";
import {button} from 'reactstrap';
import {MdPeople,MdFindInPage}from "react-icons/md";
import "./component.css"
import {Navbar2} from './Navbars/Navbar2';
import {NavBar1} from './Navbars/Navbar1';


export const Header = () => {
    return (
        <div>
        <NavBar1/>
        <Navbar2/>
        </div>
    )
}
