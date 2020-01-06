import React from 'react';
import './Card.css'
import Icon from '../CardIcon'


const Card = props => {
	let cards = [
		{
			icon: <Icon d="M31.5 12.9018C34.3612 9.54181 38.745 7.41556 43.3125 7.41556C51.3975 7.41556 57.75 13.7681 57.75 21.8531C57.75 31.7674 48.8396 39.8473 35.3395 52.0891L35.3062 52.1193L31.5 55.5843L27.6938 52.1456L27.5901 52.0514C14.1294 39.8192 5.25 31.7502 5.25 21.8531C5.25 13.7681 11.6025 7.41556 19.6875 7.41556C24.255 7.41556 28.6388 9.54181 31.5 12.9018ZM31.5 48.4968L31.7625 48.2343C44.2575 36.9206 52.5 29.4393 52.5 21.8531C52.5 16.6031 48.5625 12.6656 43.3125 12.6656C39.27 12.6656 35.3325 15.2643 33.9675 18.8606H29.0588C27.6675 15.2643 23.73 12.6656 19.6875 12.6656C14.4375 12.6656 10.5 16.6031 10.5 21.8531C10.5 29.4393 18.7425 36.9206 31.2375 48.2343L31.5 48.4968Z" />,
			title: 'Get Inspired',
			p: 'Each design evokes classic couture while expressing a vision of modern style & sophistication.'
		},
		{
			icon: <Icon d="" />,
			title: 'Book With Us',
			p: 'Spend an hour with us to create a truly unique, personalized & flattering wedding dress.'
		},
		{
			icon: <Icon d="" />,
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