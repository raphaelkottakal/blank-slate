import React from 'react';
import ReactDOM from 'react-dom';

import Countdown from './Countdown'

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

import Pairing from './Pairing'

export default class Page extends React.Component {

	render() {

		const pairingData = [
			{
				title: 'Jeans',
				image: '/dist/jeans.jpg',
				shop: 'http://www.myntra.com/jeans',
				pairs: [
					{
						title: 'one',
						image: 'https://s-media-cache-ak0.pinimg.com/564x/fa/cd/8a/facd8a3b3413bcc64108e7495db65d21.jpg',
						shop: 'http://www.myntra.com/shirt'
					},
					{
						title: 'two',
						image: 'https://s-media-cache-ak0.pinimg.com/564x/fa/cd/8a/facd8a3b3413bcc64108e7495db65d21.jpg',
						shop: 'http://www.myntra.com/shirt'
					},
					{
						title: 'three',
						image: 'https://s-media-cache-ak0.pinimg.com/564x/fa/cd/8a/facd8a3b3413bcc64108e7495db65d21.jpg',
						shop: 'http://www.myntra.com/shirt'
					},
				]
			},
			{
				title: 'Not jeans',
				image: '/dist/jeans.jpg',
				shop: 'http://www.myntra.com/jeans',
				pairs: [
					{
						title: 'one',
						image: 'https://s-media-cache-ak0.pinimg.com/564x/fa/cd/8a/facd8a3b3413bcc64108e7495db65d21.jpg',
						shop: 'http://www.myntra.com/shirt'
					},
					{
						title: 'two',
						image: 'https://s-media-cache-ak0.pinimg.com/564x/fa/cd/8a/facd8a3b3413bcc64108e7495db65d21.jpg',
						shop: 'http://www.myntra.com/shirt'
					},
					{
						title: 'three',
						image: 'https://s-media-cache-ak0.pinimg.com/564x/fa/cd/8a/facd8a3b3413bcc64108e7495db65d21.jpg',
						shop: 'http://www.myntra.com/shirt'
					},
				]
			},
			{
				title: 'Not really jeans',
				image: '/dist/jeans.jpg',
				shop: 'http://www.myntra.com/jeans',
				pairs: [
					{
						title: 'one',
						image: 'https://s-media-cache-ak0.pinimg.com/564x/fa/cd/8a/facd8a3b3413bcc64108e7495db65d21.jpg',
						shop: 'http://www.myntra.com/shirt'
					},
					{
						title: 'two',
						image: 'https://s-media-cache-ak0.pinimg.com/564x/fa/cd/8a/facd8a3b3413bcc64108e7495db65d21.jpg',
						shop: 'http://www.myntra.com/shirt'
					},
					{
						title: 'three',
						image: 'https://s-media-cache-ak0.pinimg.com/564x/fa/cd/8a/facd8a3b3413bcc64108e7495db65d21.jpg',
						shop: 'http://www.myntra.com/shirt'
					},
				]
			},
		]

		let OPTIONS = { endDate: '08/08/2016 12:00 AM' }

		return(
			<div>
				{/*<Countdown options={OPTIONS} />*/}
				<Pairing data={pairingData} />
			</div>			
		);

	}

}