import Thumb from './Thumb';
import {logementList} from '../datas/logements.js';
import '../styles/ThumbList.css';

function ThumbList(){

    return (
        <div className='thumbList'>
            {logementList.map((logement) => (
                <Thumb key={logement.id} logement={logement} />
            ))}
        </div>
    );
}

export default ThumbList;