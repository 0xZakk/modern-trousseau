import React from 'react';
import './Card.css'
import SingleCard from './SingleCard'

const Card = props => {
	let cards = [
		{
			// icon: ,
			title: 'Get Inspired',
			p: 'Each design evokes classic couture while expressing a vision of modern style & sophistication.'
		},
		{
			// icon: ,
			title: 'Book With Us',
			p: 'Spend an hour with us to create a truly unique, personalized & flattering wedding dress.'
		},
		{
			// icon: ,
			title: 'Create Your Dream Dress',
			p: 'Anything and everything is customizable to make you feel confident & beautiful.'
		}
	]

	let cardMap = cards.map((card, index) =>  {
		return(
			<SingleCard title={card.title} p={card.p} key={index} />
		)
	})
	return(
		<div className='card-container'>
			<h2 className='title'>How We Work</h2>
			{cardMap}
		</div>
	)
}

export default Card