import React from 'react';
import ReactDOM from 'react-dom';

import GifSlider from './gifslider';
import 'normalize.css/normalize.css';
import '../css/main.css';

import _ from 'lodash';

import Ga from '../functions/Ga';

export default class Page extends React.Component {

	handelShop(e) {
		Ga({action: 'shop - ' + e.target.title, label: e.target.href});
	}

	render() {

		const imgs = {
			superSkinny: [
				"http://assets.myntassets.com/v1476955366/radium/fit-women/women-final-fit-guide-1_02.jpg",
				"http://assets.myntassets.com/v1476955367/radium/fit-women/women-final-fit-guide-2_02.jpg",
				"http://assets.myntassets.com/v1476955367/radium/fit-women/women-final-fit-guide-3_02.jpg",
				"http://assets.myntassets.com/v1476955368/radium/fit-women/women-final-fit-guide-4_02.jpg",
			],
			skinny: [
				"http://assets.myntassets.com/v1476956353/radium/fit-women/women-final-fit-guide-1_04.jpg",
				"http://assets.myntassets.com/v1476956353/radium/fit-women/women-final-fit-guide-2_04.jpg",
				"http://assets.myntassets.com/v1476956353/radium/fit-women/women-final-fit-guide-3_04.jpg",
				"http://assets.myntassets.com/v1476956353/radium/fit-women/women-final-fit-guide-4_04.jpg"
			],
			slim: [
				"http://assets.myntassets.com/v1476956911/radium/fit-women/women-final-fit-guide-1_07.jpg",
				"http://assets.myntassets.com/v1476956911/radium/fit-women/women-final-fit-guide-2_07.jpg",
				"http://assets.myntassets.com/v1476956911/radium/fit-women/women-final-fit-guide-3_07.jpg",
				"http://assets.myntassets.com/v1476956910/radium/fit-women/women-final-fit-guide-4_07.jpg",
			],
			straight: [
				"http://assets.myntassets.com/v1476957039/radium/fit-women/women-final-fit-guide-1_09.jpg",
				"http://assets.myntassets.com/v1476957039/radium/fit-women/women-final-fit-guide-2_09.jpg",
				"http://assets.myntassets.com/v1476957038/radium/fit-women/women-final-fit-guide-3_09.jpg",
				"http://assets.myntassets.com/v1476957038/radium/fit-women/women-final-fit-guide-4_09.jpg",
			],
			bootcut: [
				"http://assets.myntassets.com/v1476957198/radium/fit-women/women-final-fit-guide-1_11.jpg",
				"http://assets.myntassets.com/v1476957198/radium/fit-women/women-final-fit-guide-2_11.jpg",
				"http://assets.myntassets.com/v1476957198/radium/fit-women/women-final-fit-guide-3_11.jpg",
				"http://assets.myntassets.com/v1476957198/radium/fit-women/women-final-fit-guide-4_11.jpg",
			],
			jeggings: [
				"http://assets.myntassets.com/v1476957359/radium/fit-women/women-final-fit-guide-1_13.jpg",
				"http://assets.myntassets.com/v1476957359/radium/fit-women/women-final-fit-guide-2_13.jpg",
				"http://assets.myntassets.com/v1476957359/radium/fit-women/women-final-fit-guide-3_13.jpg",
				"http://assets.myntassets.com/v1476957359/radium/fit-women/women-final-fit-guide-4_13.jpg",
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
				width: '100%'
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
					<div style={css.imageHalf}>
						<a onClick={this.handelShop} title="Super skinny" href="http://www.myntra.com/jeans?f=Fit_article_attr%3Asuper%2520skinny%2520fit%3A%3Agender%3Amen%2520women%2Cmen%2520women%2Cwomen" target="_blank">
						<GifSlider 
							imgs = {imgs.superSkinny}
							timer = {1500}
						/>
						</a>
					</div>
					
				</div>

				<div className="group">
					<div style={css.imageHalf}>
						<a onClick={this.handelShop} title="Skinny" href="http://www.myntra.com/jeans?f=Fit_article_attr%3Askinny%2520fit%3A%3Agender%3Amen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cwomen" target="_blank">	
						
						<GifSlider 
							imgs = {imgs.skinny}
							timer = {1500}
						/>
						</a>
					</div>
				</div>

				<div className="group">
				<div style={css.imageHalf}>
						<a onClick={this.handelShop} title="Slim" href="http://www.myntra.com/jeans?f=Fit_article_attr%3Aslim%2520fit%3A%3Agender%3Amen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cwomen" target="_blank">
						<GifSlider 
							imgs = {imgs.slim}
							timer = {1500}
						/>
						</a>
					</div>
					
				</div>

				<div className="group">
					
					<div style={css.imageHalf}>
						
						<a onClick={this.handelShop} title="Straight" href="http://www.myntra.com/jeans?f=Fit_article_attr%3Aregular%2520fit%3A%3Agender%3Amen%2520women%2Cmen%2520women%2Cwomen" target="_blank">
						<GifSlider 
							imgs = {imgs.straight}
							timer = {1500}
						/>
						</a>
					</div>
				</div>

				<div className="group">
					<div style={css.imageHalf}>
						
						<a onClick={this.handelShop} title="Flared"  href="http://www.myntra.com/jeans?f=Fit_article_attr%3Abootcut%3A%3Agender%3Amen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cwomen" target="_blank">
						<GifSlider 
							imgs = {imgs.bootcut}
							timer = {1500}
						/>
						</a>
					</div>
					
				</div>

				<div className="group">
					
					<div style={css.imageHalf}>
						
						<a onClick={this.handelShop} title="Jeggings"  href="http://www.myntra.com/jeggings" target="_blank">
						<GifSlider 
							imgs = {imgs.jeggings}
							timer = {1500}
						/>
						</a>
					</div>
				</div>
				
			</div>			
		);

	}

}