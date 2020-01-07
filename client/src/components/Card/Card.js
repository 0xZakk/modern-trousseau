import React from 'react';
import './Card.css'
import Icon from '../CardIcon'


const Card = props => {
	let cards = [
		{
			icon: <Icon name='heart' />,
			title: 'Get Inspired',
			p: 'Each design evokes classic couture while expressing a vision of modern style & sophistication.'
		},
		{
			icon: <Icon name='calendar' />,
			title: 'Book With Us',
			p: 'Spend an hour with us to create a truly unique, personalized & flattering wedding dress.'
		},
		{
			icon: <Icon name='dress' />,
			title: 'Create Your Dream Dress',
			p: 'Anything and everything is customizable to make you feel confident & beautiful.'
		}
	]

	let newMap = cards.map(card =>  {
		return(
			<div className='card'>
				{card.icon}
				<h4 className='cardTitle'>{card.title}</h4>
				<p className='cardParagraph'>{card.p}</p>
			</div>
		)
	})
	return(
		<div className='cardContainer'>
			<h2 className='title'>How We Work</h2>
			{newMap}
		</div>
	)
}

export default Card