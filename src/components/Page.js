import React from 'react';
// import ReactDOM from 'react-dom';

import Slider from 'react-slick';
import 'normalize.css/normalize.css';
import '../css/main.css';
import SliderGroup from './slide-group';
import sliderGroupData from '../data/slider-group';

export default class Page extends React.Component {

	getContainerStyles() {
		return {
			minHeight: window.innerHeight,
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
		}
	}


	render() {

		var settings = {
			dots: true,
			infinite: true,
			speed: 250,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			centerMode: true,
			arrows: true
		} , style={
			color: '#494949',
			padding: '0 5px',
			fontFamily: 'Source+Sans+Pro',
			fontSize: '15px'
		};

		return(
			<div style={this.getContainerStyles()}>
		        <img src="http://assets.myntassets.com/v1466595169/SIS/beauty-store-eyes/eye-makeup.jpg" style={{ width: '100%', height: 'auto'}}/>
				<p style={style}>Want to master popular eye make-up trends? Here’s an easy to follow guide that takes you through some popular styles.</p>
				<div>

					<SliderGroup data={sliderGroupData}></SliderGroup>

				</div>
				
			</div>

		);

	}
		

}