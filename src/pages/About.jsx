import React from "react";
import Banner from "../components/Banner";
import bannerPng  from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Collapse from "../components/Collapse";
import '../styles/About.css';

function About() {
  return (
    <React.Fragment>
      <Banner imgSrc={bannerPng} imgAlt='A propos'/>
      <div className="about">
        <Collapse name="Fiabilité" content="Nous sommes fiable Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"/>
        <Collapse name="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
        <Collapse name="Service" content="Nous offrons un service Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "/>
        <Collapse name="Responsabilité" content="Nous sommes responsable Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"/>
      </div>
    </React.Fragment>
  );
}

export default About;