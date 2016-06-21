import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import ImageLinker from './ImageLinker';

export default class Page extends React.Component {


	render() {

		const linkPointsRed = [
			{
				color: '#8FE0FF',
				top: '26%',
				left: '40%',
				link: 'http://www.myntra.com/shoes'
			},
			{
				color: '#BF01FD',
				top: '55%',
				left: '71%',
				link: 'http://www.myntra.com/shoes'
			},
			{
				color: '#3B3E2D',
				top: '80%',
				left: '42%',
				link: 'http://www.myntra.com/shoes'
			},
		];

		const linkPointsBlue = [
			{
				color: '#FF3333',
				top: '18%',
				left: '58%',
				link: 'http://www.myntra.com/shoes'
			},
			{
				color: 'black',
				top: '58%',
				left: '32%',
				link: 'http://www.myntra.com/shoes'
			},
			{
				color: '#F325C6',
				top: '73%',
				left: '64%',
				link: 'http://www.myntra.com/shoes'
			},
		];

		return(
			<div>

				<div style={{padding: '16px 8px'}}>Test page for the image linker</div>
				<hr />

				<div style={{padding: 8, textAlign: 'center'}}>Look 1</div>
			
				<ImageLinker
					image="http://assets.myntassets.com/v1465895191/SIS/image-linker/Red.jpg"
					points={linkPointsRed}
				/>

				<hr />
				<div style={{padding: 8, textAlign: 'center'}}>Look 2</div>

				<ImageLinker
					image="http://assets.myntassets.com/v1466074012/SIS/Blue.jpg"
					points={linkPointsBlue}
				/>
			</div>			
		);

	}

}