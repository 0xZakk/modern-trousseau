import React from 'react';
import './Card.css'
import Icon from './CardIcon'
import SingleCard from './SingleCard'

const Card = props => {
	let cards = [
		{
			// icon: <Icon name='heart' />,
			title: 'Get Inspired',
			p: 'Each design evokes classic couture while expressing a vision of modern style & sophistication.'
		},
		{
			// icon: <Icon name='calendar' />,
			title: 'Book With Us',
			p: 'Spend an hour with us to create a truly unique, personalized & flattering wedding dress.'
		},
		{
			// icon: <Icon name='dress' />,
			title: 'Create Your Dream Dress',
			p: 'Anything and everything is customizable to make you feel confident & beautiful.'
		}
	]

	let cardMap = cards.map((card, index) =>  {
		return(
			<SingleCard title={card.title} p={card.p} />
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