import React from 'react';
import _ from 'lodash';

import Ga from '../functions/Ga';

import officeStoreData from '../data/office-store';

export default class RowSpliter extends React.Component {

	// constructor() {
	// 	super();
	// 	this.state = {
	// 		width:100
	// 	}
	// }
	columnStyles(){
		let style = {
			width: '50%',
			float: 'left'
		}
		return style;
	}
	imagStyle(){
		let style = {
			width:'100%'
		}
		return style;
	}
	buttonStyle(){
		let style = {
			    textAlign: 'center',
				backgroundColor: '#000',
				color:'#fff',
				padding: '2px',
				width: '100px',
				height: '25px',
				margin: '0 auto',
			    fontSize: '13px',
			    marginTop: '15px'
		}
		return style;
	}

	createBox(){
		const boxes = this.props.data.items.map((val, key)=>{
			console.log(val, key);
			return (
				<div style={this.columnStyles()} key={key}>
					<img style={this.imagStyle()} src={val.imageUrl} />
					<p style={this.buttonStyle()}>{val.text}</p>
				</div>
			)
		});

		// console.log(boxes);
		return boxes;
	}

	render() {

		let imageStyle = {
			width:'50%',
			height: 'auto'
		}

		let heading ={
			textAlign:'center'

		}
		// console.log(this.props.data.title);

		return(
			<div>
				<p style={heading}>{this.props.data.title}</p>
				{this.createBox()}		
			</div>
		);
	}
}