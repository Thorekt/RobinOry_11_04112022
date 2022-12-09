import React from "react";
import { useParams, Navigate } from 'react-router-dom';
import Collapse from "../components/Collapse.jsx";
import Slideshow from "../components/Slideshow.jsx";
import Information from "../components/Information.jsx";
import {logementList} from '../datas/logements.js';
import "../styles/Houssing.css";

function HoussingSheet(){
    const { logementId } = useParams();

    const logement = logementList.find((logement) => logement.id === logementId);


    if(logement !== undefined){
        return (
            <React.Fragment>
                <Slideshow pictures={logement.pictures}/>
                <Information logement={logement}/>
                <div className="detail">
                    <Collapse name="Description" content={logement.description}/>
                    <Collapse name="Equipements" content={logement.equipments}/>
                </div>
            </React.Fragment>
        );
    }else{
        return (
            <React.Fragment>
                <Navigate to="/404" replace={true} />
            </React.Fragment>
        );
    }
}

export default HoussingSheet;