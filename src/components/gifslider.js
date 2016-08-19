import React from 'react';
import { PropType } from 'react';
import _ from 'lodash';

import Ga from '../functions/Ga';

export default class GifSlider extends React.Component {

	constructor() {
		super();
		this.state = {
			imgsLoaded: false,
			currentImgKey : 0
		}
	}

	componentDidMount() {

		let counter = 0,
			totalImgs = this.props.imgs.length;

		_.forEach(this.props.imgs, (val)=> {

			let img = new Image();
			img.src = val;
			img.onload = () => {
				if (counter == totalImgs - 1) {
					this.setState({
						imgsLoaded: true
					});
					this.timer();
				} else {
					counter++;
				}
			}
		});
	}

	timer() {

		setInterval(()=>{
			let totalImgs = this.props.imgs.length,
				newState;

			if (this.state.currentImgKey == totalImgs - 1) {
				newState = { currentImgKey: 0 }
			} else {
				newState = {currentImgKey: this.state.currentImgKey + 1 }
			}

			this.setState(newState);
		}, this.props.timer);
	}

	pickImg() {

		return this.props.imgs[this.state.currentImgKey]
	}
	
	render() {

		const css = {
			loading: {
				width: '100%',
				height: window.innerWidth,
				backgroundColor: 'lightgray',
				color: 'whitesmoke',
				textAlign: 'center',
			},
			table: {
				display: 'table',
				width: '100%',
				height: '100%',
			},
			tableCell: {
				display: 'table-cell',
				verticalAlign: 'middle',
			}
		}

		if (this.state.imgsLoaded) {
			return(
					<img src={this.pickImg()} style ={{maxWidth: '100%'}} alt="Image1" />
			);	
		} else {
			return(
				<div style={css.loading}>
					<div style={css.table}>
						<div style={css.tableCell}>Image loading&hellip;</div>
					</div>
				</div>	
			);
		}

	}
}

GifSlider.propTypes = {
	imgs : React.PropTypes.array.isRequired,
	timer: React.PropTypes.number.isRequired
};

