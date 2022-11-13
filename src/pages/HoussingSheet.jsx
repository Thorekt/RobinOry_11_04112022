import React from "react";
import { useParams } from 'react-router-dom';
import {logementList} from '../datas/logements.js';

function HoussingSheet(){
    const { logementId } = useParams();

    const logement = logementList.find((logement) => logement.id === logementId);

    return (
        <React.Fragment>
            <h1>{logement.title}</h1>
        </React.Fragment>
    );
}

export default HoussingSheet;