import React from 'react';
import ReactDOM from 'react-dom';
import SplitGroupData from '../data/split-grp';
import 'normalize.css/normalize.css';
import ImageLoader from 'react-imageloader';
import _ from 'lodash';
import '../css/main.css';
import ImgSpliter from './img-spliter';

export default class Page extends React.Component {


	render() {
// console.log(SplitGroupData);

	

		return (

			<div>
				<ImgSpliter data = {SplitGroupData}	/>
			</div>
		)


	}

}