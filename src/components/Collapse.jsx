import { useState } from 'react';
import '../styles/Collapse.css';
import arrowUp from '../assets/arrow-up.png';
import arrowDown from '../assets/arrow-down.png';

function Collapse({name, content}){
    const [isCollapsed, setIsCollapsed] = useState(true);

return isCollapsed ? (
    <div className="collapse">
        <div className='name' onClick={() => setIsCollapsed(false)}>
            <span>{name}</span>
            <img src={arrowDown} alt="arrow-down" />
        </div>
    </div>
) : (
    <div className="collapse open">
        <div className='name' onClick={() => setIsCollapsed(true)}>
            <span>{name}</span>
            <img src={arrowUp} alt="arrow-up" />
        </div>
        <div className='content'>
            {typeof(content) === 'string' ? <p>{content}</p> : content.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    </div>
);


}

export default Collapse;