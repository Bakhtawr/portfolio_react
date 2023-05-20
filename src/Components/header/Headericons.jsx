import React from "react";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

const Headericons = () =>
{
    return (
       <div className="header_socials">
        <a href="https://www.linkedin.com/in/bakhtawer-memon-896787131/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/Bakhtawr" target="_blank"><FaGithub /></a>
        <a href="https://www.facebook.com/meymon.bakhtawer" target="_blank"><FaFacebook /></a>
       </div>
    )
}
export default Headericons;

