import React from "react";
import './nav.css';
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { BsBook } from "@react-icons/all-files/bs/BsBook";
import { RiCustomerServiceLine } from "@react-icons/all-files/ri/RiCustomerServiceLine";
import { BiMessageSquareDetail } from "@react-icons/all-files/bi/BiMessageSquareDetail";
import { useState } from "react";

const Nav = () =>
{
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBook /></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiCustomerServiceLine /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
       </nav>
    )
}
export default Nav;

