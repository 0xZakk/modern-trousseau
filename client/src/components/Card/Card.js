import React from 'react';
import './Card.css'

const Card = (props) => {
	return(
		<div className='card-container'>
			<Icon type='heart' />
			<h4 className='card-title'>Get Inspired</h4>
			<p className='card-p'>Each design evokes classic couture while expressing a vision of modern style & sophistication.</p>
		</div>
	)
}

export default Card