import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import YouTube from 'react-youtube';

import Carousel from './carousel';

export default class Page extends React.Component {


	render() {

		const css = {
			img: {
				display: 'block',
				width: '100%',
			},
			p: {
				fontSize: 14,
				margin: 16,
			},
			shop: {
				display: 'block',
				margin: '16px 0'
			},
			blueContainer: {
				backgroundColor: '#E8E9F7',
				padding: 16,
				paddingBottom: 23,
				// marginBottom: 16
			}
		};

		const videoOptions = {
			width:'100%',
			height:'auto',
			playerVars: {
				controls: 0,
				showinfo: 0,
				color: 'white'
	        },
	    }

		return(
			<div>

				<img style={css.img} src="http://assets.myntassets.com/v1467207132/radium/marie%20claire/Marie-Claire-top.jpg" />

				<div style={css.p}>Marie Claire, the French global lifestyle brand stepped into the Indian market to add colour and glamour to the lives of Indian women with its inaugural collection that is available exclusively on Myntra. It showcases the vivacious chic pieces created by Marie Claire design team especially for Indian women.</div>
				<div style={css.p}>The Myntra shopper is smart, stylish, contemporary and independent which makes Marie Claire’s association with this platform a perfect match.</div>

				<a style={css.shop} href="http://www.myntra.com/marie-claire?SRC=Radium" target="_blank"><img style={css.img} src="http://assets.myntassets.com/v1467205485/radium/marie%20claire/Marie-Claire-2-shop.jpg" /></a>
			
				<div style={css.blueContainer}>
					<img style={css.img} src="http://assets.myntassets.com/v1467206253/radium/marie%20claire/Marie-Claire-6.jpg" />
					<div style={{fontSize: 14, marginTop: 16}}>The exclusive launch of Marie Claire in India took place in New Delhi and an array of fashion bloggers, style influences and stylists were a part of the grand launch. In attendance was former Miss India, Bollywood actor and style diva, Neha Dhupia. She was impeccably dressed in a bright Marie Claire top complete with a scalloped hemline and cut-out detailing. Keeping in tandem with the casual-chic collection the brand has to offer, Neha sported a simple yet elegant look.</div>
				</div>

				<Carousel initialSlideHeight={400}>
					<img src="http://assets.myntassets.com/v1467205734/radium/marie%20claire/Marie-Claire-3.jpg" />
					<img src="http://assets.myntassets.com/v1467205732/radium/marie%20claire/Marie-Claire-4.jpg" />
					<img src="http://assets.myntassets.com/v1467205730/radium/marie%20claire/Marie-Claire-5.jpg" />
				</Carousel>

				<div style={{
					fontSize: 14,
					margin: 16,
					marginTop: 0
				}}>It was an obvious next step for this 79 year old magazine to launch their own fashion brand and what better platform than Myntra to do the same? Their young and peppy line that includes shirts, tops, skirts, trousers, tunics, jumpsuits and maxi dresses and so much more; will target both college goers as well as working professionals. So what are you waiting for? Get your hands on this piece of French fashion now!</div>


				<div style={{margin: 16}}>
					<YouTube
						videoId="aLzvUHL3RI4"
						opts={videoOptions}
					/>
				</div>

				<a style={css.shop} href="http://www.myntra.com/marie-claire?SRC=Radium" target="_blank"><img style={css.img} src="http://assets.myntassets.com/v1467205485/radium/marie%20claire/Marie-Claire-2-shop.jpg" /></a>

			</div>			
		);

	}

}