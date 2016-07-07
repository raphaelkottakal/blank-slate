import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import _ from 'lodash';

import layeringData from '../data/layered';

import Layering from './Layering';

import Ga from '../functions/Ga';

export default class Page extends React.Component {

	handelShopBtnClick(e) {
		Ga({ label: e.target.closest('a').href });
	}

	render() {

		const css = {
			mainTitle: {
				margin: '10px 8px',
				fontFamily: 'Lora, serif',
				textAlign: 'center',
				fontSize: 10,
				letterSpacing: 2,
				textTransform: 'uppercase',
			},
			copy: {
				margin: '10px 8px',
				fontSize: 13,
				textAlign: 'center',
				padding: '0 16px',
				lineHeight: '17px'
			},
			shop: {
				color: 'black',
				display: 'block',
				textAlign: 'center',
				textDecoration: 'none',
				margin: '16px auto',
				textTransform: 'uppercase',
				// letterSpacing: 2,
				backgroundColor: '#98E3E2',
				padding: '4px',
				width: 100,
				fontSize: 13

			},
			title: {
				margin: '16px 8px',
				textTransform: 'uppercase',
				// paddingTop: 16,
				fontFamily: 'Lora, serif',
				textAlign: 'center',
				// fontSize: 13,
				letterSpacing: 2,
				// borderTop: '1px solid gray',
			},
			cta: {
				fontSize: 13,
				paddingTop: 16,
				color: 'gray',
				textAlign: 'center',
				fontStyle: 'italic'
			}
		}

		return(
			<div>

				<div style={css.mainTitle}><span style={{fontSize: 25, textTransform: 'uppercase', letterSpacing: 1}}>College trends</span><br /> you cannot miss this season</div>
				<hr width="60%" />
				<div style={css.copy}>Whether it's a jacket or a scarf, small changes make a big difference when it comes to getting ready for college. Make sure you put your best foot forward by incorporating these trendy layering options.</div>
				<div style={css.cta}>Click to add or remove layers</div>

				<Layering imgData={layeringData.look1} look="Preppy casuals" />
				<div style={css.title}>Preppy casuals</div>
				<a onClick={this.handelShopBtnClick} target="_blank" style={css.shop} href="http://www.myntra.com/preppy-casuals?SRC=Radium">Shop look</a>

				<div style={{borderBottom: '1px solid gray', width: '60%', margin: '32px auto' }} />
				<Layering imgData={layeringData.look2} look="Colour burst" />
				<div style={css.title}>Colour burst</div>
				<a onClick={this.handelShopBtnClick} target="_blank" style={_.assign({},css.shop,{backgroundColor: '#FFD782'})} href="http://www.myntra.com/colour-burst?SRC=Radium">Shop look</a>
			</div>			
		);

	}

}