import React from "react";
import './service.css';
import { BiCheck } from "@react-icons/all-files/bi/BiCheck";

const Services = () =>
{
    return(
        <section id="services">
          <h5>What I Offer</h5>
          <h2>Services</h2>
          <div className="container services__container">
             <article className="service">
              <div className="service__head">
                <h3>UI/UX Design</h3>
              </div>     
              <ul className="service__list">
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>Increase future product adoption by creating intuitive user experience design.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>Invest in user interface design for higher conversion rates and increased revenue.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>Boost customer retention by developing fit-for-purpose UI/UX design.</p>
                </li>
              
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>Build a comfortable experience for your mobile users that delivers accustomed experiences on their phone screens.</p>
                </li>
              
               
              </ul>      
             </article>

             <article className="service">
              <div className="service__head">
                <h3>Web Development</h3>
              </div>     
              <ul className="service__list">
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>Responsive Web Development & Web Applications. (PhP, HTML, CSS, Javascript, .NET, Bootstrap, Angular).</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>Website Re-design & Maintenance.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>E-commerce Website & Mobile App. (Multi-store Websites)</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>CRM & CMS Web Development & SEO & Digital Marketing.</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>Logo & Web Designing. E-commerce Social Media & Google Ads Marketing.</p>
                </li>
               
              </ul>      
             </article>

             <article className="service">
              <div className="service__head">
                <h3>Content Creation</h3>
              </div>     
              <ul className="service__list">
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>Keyword Research for SEO on websites</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>Website & Social Engagement Videos</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>Voice Search Optimized Content and Creation</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>Competitor Content Gap Intelligence Report</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>Rich Media Citations 1000 Words of SEO Content</p>
                </li>
              
                <li>
                  <BiCheck className="service__list-icon"/>
                  <p>You will get an amazing Christmas and holiday content</p>
                </li>
              </ul>      
             </article>
          </div>
        </section>     
    )
}

export default Services;

