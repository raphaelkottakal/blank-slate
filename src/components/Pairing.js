import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

export default class Page extends React.Component {

	componentDidMount() {

		console.log(this.props)
	}

	makeSections() {
		const sections = this.props.data.map((val,key)=>{
			console.log(val,key);
		});
	}

	render() {


		return(
			<div>			
				{this.makeSections()}
			</div>			
		);

	}

}