import React, { Component } from 'react'
import './Flagship.css'
import Icons from '../Icons/FAIcon'

const Menu = (props) => {


	return(
		<div className='flagship-container'>
			<header>
				<Icons name={['fas', 'arrow-left']} size='xs' />
				<h2 className='flagship-city'>{props.city}</h2>
			</header>
			<img />
			<section>
				<h3>Store Contact Info</h3>
				<hr/>
				<div className='flagship-info'>
					<Icons name={['fas', 'map-marker-alt']} />
					<h4 className='contact-info-title'>Address</h4>
					<br/>
					<p className='contact-info'>{props.address}</p>
				</div>
				<div className='flagship-info'></div>
				<div className='flagship-info'></div>
				<div className='flagship-info'></div>
			</section>
		</div>
	)
}



export default Menu