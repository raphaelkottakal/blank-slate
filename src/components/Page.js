import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

import Carousel from './carousel';

export default class Page extends React.Component {

	constructor() {
		super()
		this.state = {
			mainSlideIndex: 0,
			resultSlideIndex: 0
		}
	}

	handelAfterSlide(newSlideIndex) {
		// console.log(this.state)
		// this.goToSlide(3)
		this.setState({
			mainSlideIndex: newSlideIndex,
			resultSlideIndex: newSlideIndex
		});
	}

	render() {

		return(
			<div>
				<Carousel
					slideIndex={this.state.mainSlideIndex}
					afterSlide={this.handelAfterSlide.bind(this)}
				>
					<img src="http://placehold.it/1000x400&text=slide1"/>
					<img src="http://placehold.it/1000x400&text=slide2"/>
					<img src="http://placehold.it/1000x400&text=slide3"/>
				</Carousel>

				<Carousel
					decorators={[]}
					dragging={false}
					slideIndex={this.state.resultSlideIndex}
				>
					<img src="http://placehold.it/1000x400&text=ans1"/>
					<img src="http://placehold.it/1000x400&text=ans2"/>
					<img src="http://placehold.it/1000x400&text=ans3"/>
				</Carousel>
				Hello world!
			</div>			
		);

	}

}