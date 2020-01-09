import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Hamburger.css';

// library.add(faBars, faTimes)

// const Hamburger = (props) => (
//     <div>
//       <FontAwesomeIcon icon="check-square" />
//       Favorite beverage: <FontAwesomeIcon icon="coffee" />
//     </div>
//   )

const Hamburger = (props) => <button className="hamburger-menu" onClick={props.onClick}>
        <FontAwesomeIcon icon={faBars} />
    </button>

export default Hamburger