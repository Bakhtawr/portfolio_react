import React from "react";

import { FaBeer } from "@react-icons/all-files/fa/FaBeer";




const HeaderSocials = () =>
{
    return (
       <div className="header_socials">
        <a href="https://www.linkedin.com/in/bakhtawer-memon-896787131/" target="_blank">{FaBeer}</a>
        <a href="https://github.com/Bakhtawr" target="_blank">{FaBeer}</a>
        <a href="https://www.facebook.com/meymon.bakhtawer" target="_blank">{FaBeer}</a>
       </div>
    )
}
export default HeaderSocials;

