import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import layeringData from '../data/layered';

import Layering from './Layering';

export default class Page extends React.Component {


	render() {

		const css = {
			mainTitle: {
				margin: '16px 8px',
				fontFamily: 'Lora, serif',
				textAlign: 'center',
				fontSize: 13,
				letterSpacing: 2
			},
			copy: {
				margin: '16px 8px',
				fontSize: 12
			},
			shop: {
				color: 'gray',
				display: 'block',
				textAlign: 'center',
				textDecoration: 'none',
				margin: '16px 8px',
				textTransform: 'uppercase',
				letterSpacing: 2
			},
			title: {
				margin: '16px 8px',
				paddingTop: 16,
				fontFamily: 'Lora, serif',
				textAlign: 'center',
				fontSize: 13,
				letterSpacing: 2,
				borderTop: '1px solid gray',
			}
		}

		return(
			<div>

				<div style={css.mainTitle}><span style={{fontSize: 25, textTransform: 'uppercase', letterSpacing: 1}}>College trends</span><br /> you cannot miss this season</div>
				<div style={css.copy}>Whether it's a jacket or a scarf, small changes make a big difference when it comes to getting ready for college. Make sure you put your best foot forward by incorporating these trendy layering options.</div>
				
				<div style={css.title}>Contemporary classics</div>
				<Layering imgData={layeringData.look1} />
				<a target="_blank" style={css.shop} href="http://www.myntra.com/contemporary-classics?SRC=Radium">Shop collection</a>

				<div style={css.title}>'90s recall</div>
				<Layering imgData={layeringData.look2} />
				<a target="_blank" style={css.shop} href="http://www.myntra.com/90s-recall?SRC=Radium">Shop collection</a>
			</div>			
		);

	}

}