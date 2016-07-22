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
					masterImage = 'http://assets.myntassets.com/v1469095729/Lookgood/Feed/makeover/makeover-mockup_01.png'
					name='Sanhita Dasgupta'
					designation='Content writer'
					quotes='Enjoyable, fun and surreal! Came to know the hard work that goes into it. '
					slideBtnColor="#FD60E1"
					slideBtnTxtColor="white"
					before="http://assets.myntassets.com/v1464178528/Lookgood/Feed/makeover/may/makeover-before.jpg" 
					after="http://assets.myntassets.com/v1464178528/Lookgood/Feed/makeover/may/makeover-san-after.jpg"

					quoteStart= 'http://assets.myntassets.com/v1469092199/Lookgood/Feed/makeover/quotation-top.png'
					quoteEnd = 'http://assets.myntassets.com/v1469092199/Lookgood/Feed/makeover/quotation-bottom.png'
					curationLink = "http://www.myntra.com" />				
			</div>			
		);

	}

}