import React from 'react';
import ReactDOM from 'react-dom';

import GifSlider from './gifslider';
import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

export default class Page extends React.Component {

	render() {

		const images = [
			"http://assets.myntassets.com/assets/images/lookbook/2016/8/19/11471602640860-myntra-joy-datta-23730-A.jpg",
			"http://assets.myntassets.com/assets/images/lookbook/2016/8/19/11471602640842-myntra-joy-datta-23748-A.jpg",
			"http://assets.myntassets.com/assets/images/lookbook/2016/8/19/11471602640824-myntra-joy-datta-23765-A.jpg",
			"http://assets.myntassets.com/assets/images/lookbook/2016/8/19/11471602640805-myntra-joy-datta-23777-A.jpg"
		]

		return(
			<div>
				<GifSlider 
					imgs = {images}
					timer = {1500}
				/>

				<GifSlider 
					imgs = {images}
					timer = {1500}
				/>

				<GifSlider 
					imgs = {images}
					timer = {1500}
				/>

				<div>Here is some text</div>
			</div>			
		);

	}

}