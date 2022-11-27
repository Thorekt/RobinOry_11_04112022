import React from "react";
import { useParams } from 'react-router-dom';
import Collapse from "../components/Collapse.jsx";
import Slideshow from "../components/Slideshow.jsx";
import {logementList} from '../datas/logements.js';
import "../styles/Houssing.css";

function HoussingSheet(){
    const { logementId } = useParams();

    const logement = logementList.find((logement) => logement.id === logementId);

    return (
        <React.Fragment>
            <Slideshow pictures={logement.pictures}/>
            <h1>{logement.title}</h1>
            <span></span>
            <div className="information">
                <Collapse name="Description" content={logement.description}/>
                <Collapse name="Equipements" content={logement.equipments}/>
            </div>
        </React.Fragment>
    );
}

export default HoussingSheet;