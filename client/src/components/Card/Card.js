import React from 'react';
import './Card.css'
import Icons from '../Icons/FAIcon'

const Card = (props) => {
	return(
		<div className='card-container'>
			<Icons name={props.icon} size='3x' />
			<h4 className='card-title'>{props.title}</h4>
			<p className='card-paragraph'>{props.paragraph}</p>
		</div>
	)
}

export default Card