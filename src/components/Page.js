import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import ImageLinker from './ImageLinker';

export default class Page extends React.Component {


	render() {

		const linkPoints = [
			{
				color: 'gray',
				top: '80%',
				left: '42%',
				link: 'http://www.myntra.com/'
			},
			{
				color: 'red',
				top: '55%',
				left: '71%',
				link: 'http://www.myntra.com/'
			},
			{
				color: 'black',
				top: '26%',
				left: '40%',
				link: 'http://www.myntra.com/'
			},
		];

		return(
			<div>
			
				Hello world!
				<ImageLinker
					image="http://assets.myntassets.com/v1465895191/SIS/image-linker/Red.jpg"
					points={linkPoints}
				/>

				<ImageLinker
					image="http://assets.myntassets.com/v1465895191/SIS/image-linker/Red.jpg"
					points={linkPoints}
				/>
			</div>			
		);

	}

}