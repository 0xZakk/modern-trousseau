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
			<container>
				<h3>Store Contact Info</h3>
				<hr/>
				<div className='flagship-info'>
					<Icons name={['fas', 'map-marker-alt']} />
					<h4>Address</h4>
					<p>{props.address}</p>
				</div>
				<div className='flagship-info'></div>
				<div className='flagship-info'></div>
				<div className='flagship-info'></div>

			</container>
		</div>
	)
}



export default Menu