import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';
import _ from 'lodash';
import Ga from '../functions/Ga';
import Algo from '../data/algorithm-content.json';

export default class Page extends React.Component {

		returnValue(){
			let output = _.find(Algo, function(o) { return (
					o['ANSWER Q1'] == 'Casual Outing' &&
					o['ANSWER Q2'] == 'Feminine' &&
					o['ANSWER Q3'] == 'Shape ID 324' &&
					o['ANSWER Q4'] == 'I don’t want anything revealing or short'
				);
			});
			return output;

		}

	render() {

				console.log(this.returnValue());
		return(
			<div>
			
				Hello world!
				

			</div>			
		);

	}

}