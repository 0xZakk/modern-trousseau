import React, { Component } from 'react';
import './SingleCard.css'

class SingleCard extends Component {
	render() {
		return(
			<div className='card'>
				<h4 className='card-title'>{this.props.title}</h4>
				<p className='card-paragraph'>{this.props.p}</p>
			</div>
		)
	}
}

export default SingleCard