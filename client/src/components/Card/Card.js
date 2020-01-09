import React from 'react';
import './Card.css'
import Icons from '../Icons/FAIcon'

let types = ['heart', 'calendar', 'dress']
let useIcon = null

const Card = (props) => {
	if (types.includes(props.type)) {
		useIcon = (props.icon)
	}

	return(
		<div className='card-container'>
			<Icons name={useIcon} size='3x' />
			<h4 className='card-title'>{props.title}</h4>
			<p className='card-paragraph'>{props.paragraph}</p>
		</div>
	)
}

export default Card