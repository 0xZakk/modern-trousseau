import React from 'react';
import './Card.css'
import Heart from '../CardIcon'


const Card = props => {
	let cards = [
		{
			image: '',
			title: 'Get Inspired',
			p: 'Each design evokes classic couture while expressing a vision of modern style & sophistication.'
		},
		{
			image: '',
			title: 'Book With Us',
			p: 'Spend an hour with us to create a truly unique, personalized & flattering wedding dress.'
		},
		{
			image: '',
			title: 'Create Your Dream Dress',
			p: 'Anything and everything is customizable to make you feel confident & beautiful.'
		}
	]

	let title = 'How We Work'
	let newMap = cards.map(card =>  {
		return(
			<div className='card'>
				<div className='cardImage'>{card.image}</div>
				<Heart />
				<h4 className='cardTitle'>{card.title}</h4>
				<p className='cardParagraph'>{card.p}</p>
			</div>
		)
	})
	return(
		<div className='cardContainer'>
			<h2>How We Work</h2>
			{newMap}
		</div>
	)
}

export default Card