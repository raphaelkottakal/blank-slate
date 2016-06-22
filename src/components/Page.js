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

		// console.log('test', sliderGroupData);


		var settings = {
			dots: true,
			infinite: true,
			speed: 250,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			centerMode: true,
			arrows: false
		};

		return(
			<div style={this.getContainerStyles()}>

				<div>

					<SliderGroup data={sliderGroupData}></SliderGroup>

				</div>
				
			</div>

		);

	}
		

}