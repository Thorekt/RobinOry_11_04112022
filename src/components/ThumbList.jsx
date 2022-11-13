import Thumb from './Thumb';
import {logementList} from '../datas/logements.js';
import '../styles/ThumbList.css';
import { Link } from 'react-router-dom';

function ThumbList(){

    return (
        <div className='thumbList'>
            {logementList.map((logement) => (
                <Link to={`/housing/${logement.id}`}><Thumb key={logement.id} logement={logement} /></Link>
            ))}
        </div>
    );
}

export default ThumbList;