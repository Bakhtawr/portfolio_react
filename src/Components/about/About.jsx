import React from "react";
import './about.css';
import ME from '../../assets/me-about.png';
import Experience from './../experience/Experience';
import { FaAward } from "@react-icons/all-files/fa/FaAward";
import { FiUsers } from "@react-icons/all-files/fi/FiUsers";
import { AiOutlineFolderOpen } from "@react-icons/all-files/ai/AiOutlineFolderOpen";
 

const About = () =>
{
    return(
        <section id="about">
             <h5>Get To Know</h5>
             <h2>About Me</h2>
        <div className="container about__container">
           <div className="about__me">
              <div className="about__me-image">
                <img src={ME}  alt="About Image"/> 
              </div>
           </div>
           <div className="about_content">
              <div className="about__cards">
                  <article className="about__card">
                      <FaAward className="about__icon"/>
                      <h5>Experience</h5>
                      <small>3+ Years Work</small>
                  </article>
                  <article className="about__card">
                      <FiUsers className="about__icon"/>
                      <h5>Clients</h5>
                      <small>150+ World Wide</small>
                  </article>
                  <article className="about__card">
                      <AiOutlineFolderOpen className="about__icon"/>
                      <h5>Projects</h5>
                      <small>50+ Projects</small>
                  </article>
              </div>
              <p>Throughout my career, I have contributed to impacting business outcomes through effective organization,
               prioritization, and execution of key projects. My skills and qualifications are an ideal match to the Software
               Developer requirements and will bring immediate value goals. As a web developer I have been working on
               projects related to business, marketing, SEO and design responsive screens in front end developing.
               </p>
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
           </div>
        </section>
    )
}

export default About;

