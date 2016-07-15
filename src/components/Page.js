import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

import SplitSlider from './SplitSlider';

export default class Page extends React.Component {

	render() {

		return(
			<div>

				<SplitSlider
					name='Sanhita Dasgupta'
					designation='Content Writer'
					quotes='Enjoyable, fun and surreal! Came to know the hard work that goes into it. '
					slideBtnColor="#FD60E1"
					slideBtnTxtColor="white"
					before="http://assets.myntassets.com/v1464178528/Lookgood/Feed/makeover/may/makeover-before.jpg" 
					after="http://assets.myntassets.com/v1464178528/Lookgood/Feed/makeover/may/makeover-san-after.jpg" />				
			</div>			
		);

	}

}