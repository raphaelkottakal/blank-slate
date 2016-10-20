import React from 'react';
import ReactDOM from 'react-dom';

import GifSlider from './gifslider';
import 'normalize.css/normalize.css';
import '../css/main.css';

import _ from 'lodash';

import Ga from '../functions/Ga';

export default class Page extends React.Component {

	handelShop(e) {
		const title = e.target.closest('a').title;
		const href = e.target.closest('a').href;
		Ga({action: 'shop - ' + title, label: href});
	}

	render() {

		const imgs = {
			skinny: [
				"http://assets.myntassets.com/v1476877017/radium/fit-men/men-final-fit-guide-denim-1_02.jpg",
				"http://assets.myntassets.com/v1476877017/radium/fit-men/men-final-fit-guide-denim2_02.jpg",
				"http://assets.myntassets.com/v1476877017/radium/fit-men/men-final-fit-guide-denim3_02.jpg",
				"http://assets.myntassets.com/v1476877017/radium/fit-men/men-final-fit-guide-denim4_02.jpg",
			],
			slim: [
				"http://assets.myntassets.com/v1476877649/radium/fit-men/men-final-fit-guide-denim-1_04.jpg",
				"http://assets.myntassets.com/v1476877648/radium/fit-men/men-final-fit-guide-denim2_04.jpg",
				"http://assets.myntassets.com/v1476877650/radium/fit-men/men-final-fit-guide-denim3_04.jpg",
				"http://assets.myntassets.com/v1476877649/radium/fit-men/men-final-fit-guide-denim4_04.jpg",
			],
			straight: [
				"http://assets.myntassets.com/v1476877867/radium/fit-men/men-final-fit-guide-denim-1_06.jpg",
				"http://assets.myntassets.com/v1476877869/radium/fit-men/men-final-fit-guide-denim2_06.jpg",
				"http://assets.myntassets.com/v1476877867/radium/fit-men/men-final-fit-guide-denim3_06.jpg",
				"http://assets.myntassets.com/v1476877867/radium/fit-men/men-final-fit-guide-denim4_06.jpg",
			]
		}

		const images = [
			"http://assets.myntassets.com/assets/images/lookbook/2016/8/19/11471602640860-myntra-joy-datta-23730-A.jpg",
			"http://assets.myntassets.com/assets/images/lookbook/2016/8/19/11471602640842-myntra-joy-datta-23748-A.jpg",
			"http://assets.myntassets.com/assets/images/lookbook/2016/8/19/11471602640824-myntra-joy-datta-23765-A.jpg",
			"http://assets.myntassets.com/assets/images/lookbook/2016/8/19/11471602640805-myntra-joy-datta-23777-A.jpg"
		]

		const css = {
			mainTitleOne: {
				fontFamily: "'Playfair Display', serif",
				textAlign: 'center',
				fontSize: 28,
				color: '#0A206F',
				marginTop: 8,
			},
			mainTitleTwo: {
				textAlign: 'center',
				fontSize: 50,
				color: '#0A206F',
				marginBottom: 8,
				fontFamily: "Didot, serif",
				textTransform: 'uppercase',
				lineHeight: '45px',
			},
			imageHalf: {
				// paddingLeft: 4,
				// paddingRight: 4,
				// paddingTop: 0,
				paddingBottom: 32,
				float: 'left',
				width: '62%'
			},
			textHalf: {
				padding: 4,
				float: 'left',
				width: '38%'
			},
			number: {
				fontWeight: 'lighter',
				fontSize: 64,
				color: '#F4F4F4',
				marginBottom: -16,
			},
			title: {
				fontSize: 26,
				fontWeight: 'bold',
				color: '#5A5B5B',
				textTransform: 'uppercase',
				lineHeight: '25px',
			},
			hr: {
				width: 32,
				borderColor: '#5A5B5B',
				margin: 0,
			},
			subTitle: {
				fontSize: 13,
				color: '#000',
				textTransform: 'uppercase',
				fontWeight: 'bold',
				marginTop: 8,
				letterSpacing: 1,
			},
			content: {
				fontSize: 14,
				fontFamily: 'Whitney, san-serif',
				marginTop: 8,
				color: '#828280'
			},
			shop: {
				display: 'inline-block',
				textDecoration: 'none',
				padding: 4,
				marginTop: 13,
				textTransform: 'uppercase',
				fontSize: 12,
				color: '#000',
				backgroundColor: '#efefef',
				letterSpacing: 2
			}
		}

		return(
			<div>
				<img src = {'http://assets.myntassets.com/v1476955360/radium/fit-women/women-final-fit-guide-1_01.jpg'} style={{width:'100%'}} />

				<div className="group">
					<a onClick={this.handelShop} title="Skinny" href="http://www.myntra.com/men-jeans-store?f=Fit_article_attr%3Askinny%2520fit%2Csuper%2520skinny%2520fit" target="_blank">
						<GifSlider 
							imgs = {imgs.skinny}
							timer = {1500}
						/>
					</a>
				</div>

				<div className="group">
					<a onClick={this.handelShop} title="Slim" href="http://www.myntra.com/men-jeans-store?f=Fit_article_attr%3Aslim%2520fit%2Ctapered" target="_blank">
						<GifSlider 
							imgs = {imgs.slim}
							timer = {1500}
						/>
					</a>
				</div>

				<div className="group">
					<a onClick={this.handelShop} title="Straight" href="http://www.myntra.com/men-jeans-store?f=Fit_article_attr%3Aregular%2520fit" target="_blank">
						<GifSlider 
							imgs = {imgs.straight}
							timer = {1500}
						/>
					</a>
				</div>
				
			</div>			
		);

	}

}