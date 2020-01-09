import React, { Component } from 'react'
import './Flagship.css'
import Icons from '../Icons/FAIcon'

const Menu = (props) => {
	return(
		<div className='flagship-container'>
			<header className='flagship-header'>
				<Icons name={['fas', 'arrow-left']} size='xs' />
				<h2 className='flagship-city'>{props.city}</h2>
			</header>
			<img />
			<section>
				<h3 className='store-contact-info'>Store Contact Info</h3>
				<hr className='flagship-line'/>
				<div className='flagship-info'>
					<Icons name={['fas', 'map-marker-alt']} />
					<h4 className='contact-info-title'>Address</h4>

					<p className='contact-info'>{props.address}</p>
				</div>
				<div className='flagship-info'>
					<Icons name={['fas', 'phone-alt']} />
					<h4 className='contact-info-title'>Phone</h4>

					<p className='contact-info'>{props.phone}</p>
				</div>
				<div className='flagship-info'>
					<Icons name={['far', 'envelope']} />
					<h4 className='contact-info-title'>Email</h4>

					<p className='contact-info'>{props.email}</p>
				</div>
				<div className='flagship-info'>
					<Icons name={['fab', 'instagram']} />
					<h4 className='contact-info-title'>Instagram</h4>

					<p className='contact-info'>{props.instagram}</p>
				</div>
			</section>
		</div>
	)
}

export default Menu