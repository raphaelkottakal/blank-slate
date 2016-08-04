import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

import RowSpliter from './rowspliter';

import officeStoreData from '../data/office-store';


export default class Page extends React.Component {

	render() {

		return(
			<div>
				<RowSpliter data={officeStoreData} />
			</div>			
		)
	}
}