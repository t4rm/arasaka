import React from 'react';
import "../../css/Header.css";
import { getRandomFloat } from "../../utils/functions";

function Bourse() {
    return (
        <li className='bourse-container'>
            <span className='bourse-name'>GLOBAL 500</span>: ASK €$194.14 <span className='bourse-fluctuation'>+{getRandomFloat(0,2,2)}</span>
        </li>
    );
}

export default Bourse;