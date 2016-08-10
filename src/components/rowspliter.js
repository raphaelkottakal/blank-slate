import React from 'react';
import _ from 'lodash';

import Ga from '../functions/Ga';

import officeStoreData from '../data/office-store';

export default class RowSpliter extends React.Component {

	columnStyles(){
		let style = {
			width: '50%',
			float: 'left',
			textAlign: 'center'
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
		    fontFamily:this.props.data.font,
		    fontSize:this.props.data.fontsize,
			backgroundColor: this.props.data.bgColor,
			color:this.props.data.color,
			padding: '4px 12px',
			display: 'inline-block', 
			textDecoration:'none',
		    marginTop: '15px',
		}
		return style;
	}

	createBox(){
		const boxes = this.props.data.items.map((val, key)=>{
			// console.log(val, key);
			// console.log(this.props.data);
			return (
				<div style={this.columnStyles()} key={key}>
					<img style={this.imagStyle()} src={val.imageUrl} />
					<a style={this.buttonStyle()} href={val.shopLink}>{val.text}</a>
				</div>
			)
		});

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

		return(
			<div>
				<p style={heading}>{this.props.data.title}</p>
				{this.createBox()}		
			</div>
		);
	}
}