import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';
import sliderGroupData from '../data/slider-group';

import Carousel from './carousel';

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

	renderCarousel() {
		const carousels = sliderGroupData.map((carousel, i) => {
			const linkStyle = {
				color:'black',
				textAlign: 'center',
				textDecoration: 'none',
				margin: '0 auto',
				display: 'block',
				backgroundColor: '#F9C7CC',
				padding: '2px',
				margin: '0 auto',
				width: '115px',
	    		fontSize: '14px',
	    		letterSpacing: '3px',
	    		marginBottom: '25px',
	    		position: 'relative',
	    		textTransform: 'uppercase',
	    		top: '-26px'
			}
			return (
				<div key={i}>
					<img style={{width: '100%',height:'auto'}} src={carousel.img} />
					<Carousel initialSlideHeight={400}>
						{this.renderSlides(carousel.slides)}
					</Carousel>
					<a href={carousel.link} target="_blank" style={linkStyle}>Try now</a>
				</div>
			);
		});

		return carousels;
	}

		
	renderSlides(slidesArray) {
		const slides = slidesArray.map((slide, i) => {
			return (
				<div key={i}>
					<img style={{width: '100%',height:'auto'}} src={slide.img} />
					<div style={{padding: '0 8px', textAlign: 'center'}}>{slide.text}</div>
				</div>
			);
		});

		return slides;
	}


	render() {

		var style={
			color: '#494949',
			padding: '0 5px',
			fontFamily: 'Source+Sans+Pro',
			fontSize: '15px'
		};

		return(
			<div style={this.getContainerStyles()}>

		        <img src="http://assets.myntassets.com/v1467717675/SIS/beauty-store-eyes/step-by-step-makeup.jpg" style={{ width: '100%', height: 'auto'}}/>
				<p style={style}>Want to master popular eye make-up trends? Here’s an easy to follow guide that takes you through some popular styles.</p>
				<div>
					{this.renderCarousel()}
				</div>
				
			</div>

		);

	}
		

}