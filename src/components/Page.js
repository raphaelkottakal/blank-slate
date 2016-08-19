import React from 'react';
import ReactDOM from 'react-dom';

import GifSlider from './gifslider';
import 'normalize.css/normalize.css';
import '../css/main.css';

import _ from 'lodash';

import Ga from '../functions/Ga';

export default class Page extends React.Component {

	render() {

		const imgs = {
			superSkinny: [
				"http://assets.myntassets.com/assets/images/lookbook/denim-women2016/8/19/11471615886519-myntra-joy-datta-23681-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-women2016/8/19/11471615886499-myntra-joy-datta-23683-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-women2016/8/19/11471615886475-myntra-joy-datta-23699-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-women2016/8/19/11471615886442-myntra-joy-datta-23708-A.jpg",
			],
			skinny: [
				"http://assets.myntassets.com/assets/images/lookbook/2016/8/19/11471602640860-myntra-joy-datta-23730-A.jpg",
			"http://assets.myntassets.com/assets/images/lookbook/2016/8/19/11471602640842-myntra-joy-datta-23748-A.jpg",
			"http://assets.myntassets.com/assets/images/lookbook/2016/8/19/11471602640824-myntra-joy-datta-23765-A.jpg",
			"http://assets.myntassets.com/assets/images/lookbook/2016/8/19/11471602640805-myntra-joy-datta-23777-A.jpg"
			],
			slim: [
				"http://assets.myntassets.com/assets/images/lookbook/denim-women2016/8/19/11471615439364-myntra-joy-datta-23788-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-women2016/8/19/11471615439349-myntra-joy-datta-23807-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-women2016/8/19/11471615439312-myntra-joy-datta-23823-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-women2016/8/19/11471615439332-myntra-joy-datta-23815-A.jpg",
			],
			straight: [
				"http://assets.myntassets.com/assets/images/lookbook/denim-women2016/8/19/11471615627453-myntra-joy-datta-23836-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-women2016/8/19/11471615627434-myntra-joy-datta-23856-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-women2016/8/19/11471615627400-myntra-joy-datta-23872-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-women2016/8/19/11471615627414-myntra-joy-datta-23861-A.jpg",
			],
			bootcut: [
				"http://assets.myntassets.com/assets/images/lookbook/denim-women/2016/8/19/11471616117964-myntra-joy-datta-23885-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-women/2016/8/19/11471616117940-myntra-joy-datta-23891-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-women/2016/8/19/11471616117926-myntra-joy-datta-23907-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-women/2016/8/19/11471616117910-myntra-joy-datta-23911-A.jpg",
			],
			jeggings: [
				"http://assets.myntassets.com/assets/images/lookbook/denim-women/2016/8/19/11471616274794-myntra-joy-datta-24072-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-women/2016/8/19/11471616274771-myntra-joy-datta-24078-A.jpg",
				"http://assets.myntassets.com/assets/images/lookbook/denim-women/2016/8/19/11471616274760-myntra-joy-datta-24096-A.jpg",
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
							imgs = {imgs.superSkinny}
							timer = {1500}
						/>
					</div>
					<div style={_.assignIn({}, css.textHalf, {paddingLeft: 8})}>
						<div style={css.number}>01</div>
						<div style={css.title}>Super<br/>skinny</div>
						<hr style={css.hr} />
						<div style={css.subTitle}>The snug fit</div>
						<div style={css.content}>A slim fit through the hips and thighs with a super skinny leg.</div>
						<a style={css.shop} href="http://www.myntra.com/jeans?f=Fit_article_attr%3Asuper%2520skinny%2520fit%3A%3Agender%3Amen%2520women%2Cmen%2520women%2Cwomen" target="_blank">Shop now</a>
					</div>
				</div>

				<div className="group">
					<div style={_.assignIn({},css.textHalf,{textAlign: 'right', paddingRight: 8})}>
						<div style={css.number}>02</div>
						<div style={css.title}>Skinny</div>
						<hr style={_.assignIn({},css.hr,{margin: '0 0 0 auto'})} />
						<div style={css.subTitle}>The snug fit</div>
						<div style={css.content}>Usually fits well around your waist, hips and legs and tapers down towards the ankles.</div>
						<a style={css.shop} href="http://www.myntra.com/jeans?f=Fit_article_attr%3Askinny%2520fit%3A%3Agender%3Amen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cwomen" target="_blank">Shop now</a>
					</div>
					<div style={css.imageHalf}>
						<GifSlider 
							imgs = {imgs.skinny}
							timer = {1500}
						/>
					</div>
				</div>

				<div className="group">
				<div style={css.imageHalf}>
						<GifSlider 
							imgs = {imgs.slim}
							timer = {1500}
						/>
					</div>
					<div style={_.assignIn({},css.textHalf,{ paddingLeft: 8})}>
						<div style={css.number}>03</div>
						<div style={css.title}>Slim</div>
						<hr style={css.hr} />
						<div style={css.subTitle}>The narrow fit</div>
						<div style={css.content}>These normally fit well around your hips and waist while the leg is slightly narrower than straight jeans and slightly broader than skinny jeans.</div>
						<a style={css.shop} href="http://www.myntra.com/jeans?f=Fit_article_attr%3Aslim%2520fit%3A%3Agender%3Amen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cwomen" target="_blank">Shop now</a>
					</div>
				</div>

				<div className="group">
					<div style={_.assignIn({}, css.textHalf, {textAlign: 'right', paddingRight: 8})}>
						<div style={css.number}>04</div>
						<div style={_.assignIn( {}, css.title, {fontSize: 20})}>Straight</div>
						<hr style={_.assignIn({},css.hr,{margin: '0 0 0 auto'})} />
						<div style={css.subTitle}>The comfy fit</div>
						<div style={css.content}>This good old classic style is the most comfortable and the width of the leg is proportionate between your knees and ankles.</div>
						<a style={css.shop} href="http://www.myntra.com/jeans?f=Fit_article_attr%3Aregular%2520fit%3A%3Agender%3Amen%2520women%2Cmen%2520women%2Cwomen" target="_blank">Shop now</a>
					</div>
					<div style={css.imageHalf}>
						<GifSlider 
							imgs = {imgs.straight}
							timer = {1500}
						/>
					</div>
				</div>

				<div className="group">
					<div style={css.imageHalf}>
						<GifSlider 
							imgs = {imgs.bootcut}
							timer = {1500}
						/>
					</div>
					<div style={_.assignIn({}, css.textHalf, {paddingLeft: 8})}>
						<div style={css.number}>05</div>
						<div style={_.assignIn( {}, css.title,{fontSize: 20})}>Flared &amp;<br/>bootcut</div>
						<hr style={css.hr} />
						<div style={css.subTitle}>The flare fit</div>
						<div style={css.content}>This style fits well around the hips and flare out below the knees right down to the ankles.</div>
						<a style={css.shop} href="http://www.myntra.com/jeans?f=Fit_article_attr%3Abootcut%3A%3Agender%3Amen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cwomen" target="_blank">Shop now</a>
					</div>
				</div>

				<div className="group">
					<div style={_.assignIn({}, css.textHalf, {textAlign: 'right', paddingRight: 8})}>
						<div style={css.number}>06</div>
						<div style={_.assignIn( {}, css.title,{fontSize: 20})}>Jeggings</div>
						<hr style={_.assignIn({},css.hr,{margin: '0 0 0 auto'})} />
						<div style={css.subTitle}>The<br/>shin-tight fit</div>
						<div style={css.content}>These fit like leggings, but look like jeans. They are figure-hugging but comfortable  because of their elasticity.</div>
						<a style={css.shop} href="http://www.myntra.com/jeggings" target="_blank">Shop now</a>
					</div>
					<div style={css.imageHalf}>
						<GifSlider 
							imgs = {imgs.jeggings}
							timer = {1500}
						/>
					</div>
				</div>
				
			</div>			
		);

	}

}