import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';
import sliderGroupData from '../data/slider-group';

import Carousel from './carousel';

import Ga from '../functions/Ga';

import ImageLinker from './ImageLinker';

export default class Page extends React.Component {

	handelShopBtnClick(e) {
		Ga({ label: e.target.href });
	}

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
				color:'#fff',
				textAlign: 'center',
				textDecoration: 'none',
				margin: '0 auto',
				display: 'block',
				backgroundColor: 'rgb(179, 192, 234)',
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
					<a onClick={this.handelShopBtnClick} href={carousel.link} target="_blank" style={linkStyle}>Try now</a>
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

		const linkPointsRed = [
			{
				color: '#8FE0FF',
				top: '26%',
				left: '40%',
				link: 'http://www.myntra.com/jackets/puma/puma-navy--red-reversible-jacket/1002113/buy'
			},
			{
				color: '#BF01FD',
				top: '55%',
				left: '71%',
				link: 'http://www.myntra.com/backpacks/wildcraft/wiki-by-wildcraft-unisex-red-printed-backpack/783244/buy'
			},
			{
				color: '#3B3E2D',
				top: '80%',
				left: '42%',
				link: 'http://www.myntra.com/casual-shoes/supra/supra-men-white-yorek-low-sneakers/1359648/buy'
			},
		];

		const linkPointsBlue = [
			{
				color: '#FF3333',
				top: '18%',
				left: '58%',
				link: 'http://www.myntra.com/sunglasses/ray-ban/ray-ban-unisex-browline-sunglasses-0rb3016/255303/buy'
			},
			{
				color: 'black',
				top: '58%',
				left: '32%',
				link: 'http://www.myntra.com/backpacks/flying-machine/flying-machine-unisex-white--black-printed-backpack/1083038/buy'
			},
			{
				color: '#F325C6',
				top: '73%',
				left: '64%',
				link: 'http://www.myntra.com/casual-shoes/fila/fila-men-black-relaxer-iv-casual-shoes/1186242/buy'
			},
		];

		return(
			<div style={this.getContainerStyles()}>

		        <h2 style={{marginLeft: 5}} >Image linker and slider</h2>
				<p style={style}>This is pretty cool! Click bouncing circles to shop item.</p>
				<div>
					<Carousel initialSlideHeight={400} autoplay={true} autoplayInterval={4000}>
						<div>
							<ImageLinker
								image="http://assets.myntassets.com/v1465895191/SIS/image-linker/Red.jpg"
								points={linkPointsRed}
							/>
							<div style={{padding: '0 8px', textAlign: 'center'}}>Some random text.</div>
						</div>
						<div>
							<ImageLinker
								image="http://assets.myntassets.com/v1466074012/SIS/Blue.jpg"
								points={linkPointsBlue}
							/>
							<div style={{padding: '0 8px', textAlign: 'center'}}>Some more random text.</div>
						</div>
						<div>
							<ImageLinker
								image="http://assets.myntassets.com/v1465895191/SIS/image-linker/Red.jpg"
								points={linkPointsRed}
							/>
							<div style={{padding: '0 8px', textAlign: 'center'}}>Some random text.</div>
						</div>
						<div>
							<ImageLinker
								image="http://assets.myntassets.com/v1466074012/SIS/Blue.jpg"
								points={linkPointsBlue}
							/>
							<div style={{padding: '0 8px', textAlign: 'center'}}>Some more random text.</div>
						</div>
					</Carousel>
				</div>
				
			</div>

		);

	}
		

}