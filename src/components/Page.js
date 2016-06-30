import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

export default class Page extends React.Component {

	handleClickShoes(event) {
		ga('send', 'event', 'Radium', window.location.href, event.target.href);
	}

	handleClickPants(event) {
		ga('send', 'event', 'Radium', window.location.href, event.target.href);
	}


	render() {

		const css = {
			shop: {
				display: 'block',
				backgroundColor: 'tomato',
				textAlign: 'center',
				marginTop: 16,
				padding: 4,
				color: 'white',
				textDecoration: 'none'
			}
		}

		return(
			<div>
			
				Hello world!

				<a style={css.shop} href="http://www.myntra.com/shoes" target="_blank" onClick={this.handleClickShoes}>Shoes</a>
				<a style={css.shop} href="http://www.myntra.com/pants" target="_blank" onClick={this.handleClickPants}>Pants</a>
			</div>			
		);

	}

}