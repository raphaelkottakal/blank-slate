import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Carousel from './carousel';

export default class Page extends React.Component {


	render() {

		return(
			<div>
			
				<Carousel initialSlideHeight={400}>
					<img src="http://placehold.it/360x400/ffffff/c0392b/&text=slide1" />
					<img src="http://placehold.it/360x400/ffffff/c0392b/&text=slide2" />
					<img src="http://placehold.it/360x400/ffffff/c0392b/&text=slide3" />
					<img src="http://placehold.it/360x400/ffffff/c0392b/&text=slide4" />
				</Carousel>
			</div>			
		);

	}

}