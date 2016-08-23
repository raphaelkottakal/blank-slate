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
			skinny: [
				"http://assets.myntassets.com/assets/images/lookbook/denim-men/2016/8/19/11471612915396-Myntra-Joy-Datta1553-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-men/2016/8/19/11471612915385-Myntra-Joy-Datta1557-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-men/2016/8/19/11471612915374-Myntra-Joy-Datta1584-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-men/2016/8/19/11471612915364-Myntra-Joy-Datta1605-A.jpg",
			],
			slim: [
				"http://assets.myntassets.com/assets/images/lookbook/denim-men/2016/8/19/11471614339785-Myntra-Joy-Datta1662-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-men/2016/8/19/11471614339809-Myntra-Joy-Datta1657-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-men/2016/8/19/11471614339836-Myntra-Joy-Datta1648-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-men/2016/8/19/11471614339853-Myntra-Joy-Datta1644-A.jpg",
			],
			straight: [
				"http://assets.myntassets.com/assets/images/lookbook/denim-men/2016/8/19/11471614428907-Myntra-Joy-Datta1620-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-men/2016/8/19/11471614428892-Myntra-Joy-Datta1633-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-men/2016/8/19/11471614428877-Myntra-Joy-Datta1639-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-men/2016/8/19/11471614428923-Myntra-Joy-Datta1618-A.jpg",
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

				<div style={css.mainTitleOne}>find your perfect</div>
				<div style={css.mainTitleTwo}>Pair</div>

				<div className="group">
					<div style={css.imageHalf}>
						<GifSlider 
							imgs = {imgs.skinny}
							timer = {1500}
						/>
					</div>
					<div style={_.assignIn({}, css.textHalf, {paddingLeft: 8})}>
						<div style={css.number}>01</div>
						<div style={css.title}>Skinny</div>
						<hr style={css.hr} />
						<div style={css.subTitle}>The snug fit</div>
						<div style={css.content}>These denims come with a low-rise and a fit that hugs your frame from the seat right down to the ankles.</div>
						<a onClick={this.handelShop} title="Skinny" style={css.shop} href="http://www.myntra.com/men-jeans-store?f=Fit_article_attr%3Askinny%2520fit%2Csuper%2520skinny%2520fit" target="_blank">Shop now</a>
					</div>
				</div>

				<div className="group">
					<div style={_.assignIn({},css.textHalf,{textAlign: 'right', paddingRight: 8})}>
						<div style={css.number}>02</div>
						<div style={css.title}>Slim</div>
						<hr style={_.assignIn({},css.hr,{margin: '0 0 0 auto'})} />
						<div style={css.subTitle}>The narrow fit</div>
						<div style={css.content}>With a rise that’s between low to medium, these denims are similar to the skinny fit with minor differences. They’re fitted through the seat and thighs with a slightly tapered leg that narrows out again as it reaches your ankles.</div>
						<a onClick={this.handelShop}  title="Slim" style={css.shop} href="http://www.myntra.com/men-jeans-store?f=Fit_article_attr%3Aslim%2520fit%2Ctapered" target="_blank">Shop now</a>
					</div>
					<div style={css.imageHalf}>
						<GifSlider 
							imgs = {imgs.slim}
							timer = {1500}
						/>
					</div>
				</div>

				<div className="group">
					<div style={css.imageHalf}>
						<GifSlider 
							imgs = {imgs.straight}
							timer = {1500}
						/>
					</div>
					<div style={_.assignIn({}, css.textHalf, {paddingLeft: 8})}>
						<div style={css.number}>03</div>
						<div style={_.assignIn( {}, css.title, {fontSize: 20})}>Straight</div>
						<hr style={css.hr} />
						<div style={css.subTitle}>The comfy fit</div>
						<div style={css.content}>This good old classic style comes with a high-rise and is the most comfortable of all. The width of the leg is proportionate between your knees and ankles.</div>
						<a onClick={this.handelShop}  title="Straight" style={css.shop} href="http://www.myntra.com/men-jeans-store?f=Fit_article_attr%3Aregular%2520fit" target="_blank">Shop now</a>
					</div>
				</div>
				
			</div>			
		);

	}

}