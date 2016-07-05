import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

export default class Page extends React.Component {

	handelShopBtnClick(e) {
		Ga({label: e.target.href});
	}


	render() {

		const css = {
			img: {
				display: 'block',
				width: '100%',
				height: 'auto',
			},
			text: {
				color: '#494949',
				margin: '8px 32px',
				textAlign: 'center',
				fontStyle: 'italic'
			},
			hr: {
				borderBottom: '3px solid gray',
				width: '10%',
				margin: '4px auto 32px auto',
			},
			shop: {
				display: 'block',
				color: 'gray',
				textTransform: 'uppercase',
				textDecoration: 'none',
				textAlign: 'center',
				fontFamily: "'Open Sans', sans-serif",
				letterSpacing: 3,
				fontSize: 15,
				marginTop: 16,
			}
		}

		return(
			<div>

				<img style={css.img} src="http://assets.myntassets.com/v1467717482/radium/SIS/makeup-trends-to-watch-out-for.jpg" />
				<div style={{margin: '4px 1% 16px 1%'}}>Want to know the season’s hottest beauty trends? We're giving you the low down.</div>

			
				<img style={css.img} src="http://assets.myntassets.com/v1466499961/SIS/beauty-makeup/candy-apple-lips-min.jpg" />
				<div style={css.text}>This irresistible shade of red is all the rage right now. P.S. - It’s perfect for date night</div>
				<a onClick={this.handelShopBtnClick} style={_.assignIn({},css.shop,{color: '#F5444C'})} href="http://www.myntra.com/candy-apple-lips?SRC=Radium" target="_blank">Try now</a>
				<div style={_.assignIn({}, css.hr, {borderColor: '#F5444C'})} />

				<img style={css.img} src="http://assets.myntassets.com/v1466499961/SIS/beauty-makeup/shimmer-eyeshadow-min.jpg" />
				<div style={css.text}>A glitter eyeshadow is like wearing jewellery on your face. This make-up trend is sure to make you sparkle.</div>
				<a onClick={this.handelShopBtnClick} style={_.assignIn({},css.shop,{color: '#4E4131'})} href="http://www.myntra.com/shimmer-eyeshadows?SRC=Radium" target="_blank">Try now</a>
				<div style={_.assignIn({},css.hr, {borderColor: '#4E4131'})} />

				<img style={css.img} src="http://assets.myntassets.com/v1466499961/SIS/beauty-makeup/electric-blue-eyes-min.jpg" />
				<div style={css.text}>Ditch the pastels and go bold with electric blue eyes. Stock up on everything blue from eyeshadows to eye pencils.</div>
				<a onClick={this.handelShopBtnClick} style={_.assignIn({},css.shop,{color: '#007EF3'})} href="http://www.myntra.com/electric-blue-eyes?SRC=Radium" target="_blank">Try now</a>
				<div style={_.assignIn({},css.hr, {borderColor: '#007EF3'})} />

				<img style={css.img} src="http://assets.myntassets.com/v1466499961/SIS/beauty-makeup/sun-kissed-bronzer-min.jpg" />
				<div style={css.text}>Fake that perfect tan with a the season’s must-have vanity item - the sun-kissed bronzer!</div>
				<a onClick={this.handelShopBtnClick} style={_.assignIn({},css.shop,{color: '#4E4131'})} href="http://www.myntra.com/bronzer?SRC=Radium" target="_blank">Try now</a>
				<div style={_.assignIn({},css.hr, {borderColor: '#4E4131'})} />
			</div>			
		);

	}

}