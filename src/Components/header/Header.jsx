import React from "react";
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headericons from './Headericons';
import Nav from "../nav/Nav";

const Header = () =>
{
    return (      
      <header>
        <div className="container header_container">         
          <h3>Hello, I'm</h3>
          <h1>Bakhtawar Memon</h1>
          <h2 className="text-light">Full Stack Developer</h2>
          <CTA/>
          <Headericons />
          <div className="image_box">
          <img src={ME} alt="my_image" className="me"/>
          </div>
          <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
        </header>
    )
}
export default Header;

