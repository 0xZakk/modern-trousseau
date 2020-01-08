import React from 'react';
import './Card.css'

const Card = (props) => {
	return(
		<div className='card-container'>
			<div className='card-icon'>{props.icon}</div>
			<h4 className='card-title'>{props.title}</h4>
			<p className='card-p'>{props.paraText}</p>
		</div>
	)
}

export default Card