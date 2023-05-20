import React from "react";
import './experience.css';
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";



const Experience = () =>
{
    return(
        <section id="experience">

        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
         <div className="container experience__container">
           <div className="experience__frontend">
              <h3>Frontend Development</h3>
              <div className="experience__content">
                <article className="experience__details">
                    <FaCheckCircle className="icon"/>
                    <div>
                    <h4>HTML</h4>
                    <small className="text-light">Experienced</small>
                    </div>               
                </article>
                <article className="experience__details">
                    <FaCheckCircle className="icon"/>
                    <div>
                    <h4>CSS/SASS</h4>
                    <small className="text-light">Experienced</small>
                    </div>                 
                </article>
                <article className="experience__details">
                    <FaCheckCircle className="icon"/>
                    <div>
                    <h4>BOOTSTRAP</h4>
                    <small className="text-light">Experienced</small>
                    </div>             
                </article>
                <article className="experience__details">
                    <FaCheckCircle className="icon"/>
                    <div>
                    <h4>WordPress</h4>
                    <small className="text-light">Experienced</small>
                    </div>         
                </article>
                <article className="experience__details">
                    <FaCheckCircle className="icon"/>
                    <div>
                    <h4>REACT</h4>
                    <small className="text-light">Experienced</small>
                    </div>                 
                </article>
                <article className="experience__details">
                    <FaCheckCircle className="icon"/>
                    <div>
                    <h4>Javascrip/Jquery</h4>
                    <small className="text-light">Experienced</small>
                    </div>                 
                </article>
              </div>
           </div>

           <div className="experience__backend">
           <h3>Backend Development</h3>
              <div className="experience__content"  >
                <article className="experience__details">
                    <FaCheckCircle className="icon"/>
                    <div>
                    <h4>.net </h4>
                    <small className="text-light">Advanced</small>
                    </div>        
                </article>
                <article className="experience__details">
                    <FaCheckCircle className="icon"/>
                    <div>
                    <h4>C#</h4>
                    <small className="text-light">Experienced</small>
                    </div>               
                </article>
                <article className="experience__details">
                    <FaCheckCircle className="icon"/>
                    <div>
                    <h4>OOP</h4>
                    <small className="text-light">Experienced</small>
                    </div>               
                </article>
                <article className="experience__details">
                    <FaCheckCircle className="icon"/>
                    <div>
                    <h4>Node.js</h4>
                    <small className="text-light">Experienced</small>
                    </div>                
                </article>
                <article className="experience__details">
                    <FaCheckCircle className="icon"/>
                    <div>
                    <h4>SQL</h4>
                    <small className="text-light">Experienced</small>
                    </div>         
                </article>
                <article className="experience__details">
                    <FaCheckCircle className="icon"/>
                    <div>
                    <h4>Mongo DB</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                  
                </article>
              </div>
           </div>

         </div>

         
        </section>
    )
}

export default Experience;

