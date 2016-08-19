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

		const css = {
			imageHalf: {
				float: 'left',
				// display: 'inline-block',
				width: '60%'
			},
			textHalf: {
				float: 'left',
				// display: 'inline-block',
				width: '40%'
			},
			number: {
				fontSize: 64,
				color: '#F4F4F4',
				marginBottom: -16,
			},
			title: {
				fontSize: 32,
				fontWeight: 'bold',
				color: '#5A5B5B',
				textTransform: 'uppercase'
			},
			hr: {
				width: 32,
				borderColor: '#5A5B5B',
				margin: 0
			},
			subTitle: {
				color: '#000',
				textTransform: 'uppercase',
				fontWeight: 'bold',
				marginTop: 8
			},
			content: {
				marginTop: 16
			}
		}

		return(
			<div>

				<div>
					<div style={css.imageHalf}>
						<GifSlider 
							imgs = {images}
							timer = {1500}
						/>
					</div>
					<div style={css.textHalf}>
						<div style={css.number}>01</div>
						<div style={css.title}>Super<br/>skinny</div>
						<hr style={css.hr} />
						<div style={css.subTitle}>The skin fit</div>
						<div style={css.content}>Donec dolor tortor, ullamcorper eu imperdiet sed, ultrices quis ex.</div>
					</div>
				</div>
				
			</div>			
		);

	}

}