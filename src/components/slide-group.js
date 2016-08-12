import React from 'react';
import Slider from 'react-slick';

import { forEach } from 'lodash';

import '../css/slider.css';

export default class SlideGroup extends React.Component {

	createSlide(slides) {
		let sliderGroup = slides.map((slide, key) => {
			return (
				<a key={key} href={slide.link} target="_blank">
					<img src={slide.img} style={{ width: '100%', height: 'auto' }} />
					<div style={{margin:'3% 2% 0% 2%'}}>{slide.text}</div>
				</a>
				// <div data={slide.text}></div>
			)
		});

		return sliderGroup;
	}

	createSliders(object) {

		console.log(this);
		let settings = {
			dots: true,
			infinite: true,
			speed: 250,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: false
		}



		let sliders = this.props.data.map((sliders, key) => {

			// console.log(sliders.slides.length);
			if(sliders.slides.length < 2) {
				_.assignIn(settings, { infinite: false, autoplay: false } );
			}

			else {

				_.assignIn(settings, { infinite: true, autoplay: true } );				
			}
			
			return (
				<div key={key} style={{ backgroundColor: sliders.bgColor, textAlign:'center', margin: '5% 0%'}}>
					<img src={sliders.img} style={{ width: '100%', height: 'auto' }} />

					<Slider {...settings}>
							{this.createSlide(sliders.slides)}
					</Slider>
					{/*<a href={'http://www.myntra.com/women-hairstyling?SRC=Radium'} target="_blank" 
					style={{textAlign:'center', 
					backgroundColor: '#A8B5DF', 
					textDecoration:'none',
					padding: '3px 14px',  
					textTransform:'uppercase', 
					fontSize:'14px',
					letterSpacing:'3px',
					top: '-27px',
					color:'#fff',
					position:'relative' }}>
					Try now</a>*/}
				</div>
			);
		});

		return sliders;

	}




		render() {

			return(
				<div>
					{this.createSliders()}
				</div>
			);
		}
}