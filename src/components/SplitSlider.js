import React from 'react';
import _ from 'lodash';

export default class SplitSlider extends React.Component {

	constructor() {
		super();
		this.state = {
			position: 52,
			onfirsttap: false,
			// touche0x: null,
			// touche0y: null

		}
	}

	handleClick(e) {
		// console.log('Clicked', e);
		// console.log('X', e.clientX);
		// console.log('Y', e.clientY);
		// console.log('Width', e.target.parentElement.offsetWidth);

		let width = e.target.parentElement.offsetWidth,
			x = e.touches[0].clientX,
			spliterWidth = Math.round(x / width * 100),
			textToslide = 'slide';

		// console.log(e.touches);

		let setObject = {
			position: spliterWidth,
			// touche0x: e.touches[0].clientX,
			// touche0y: e.touches[0].clientY

		}
		// console.log(this.state.onfirsttap)

		// if (this.state.onfirsttap) {
		// 	_.assignIn(setObject, {		
		// 		onfirsttap: 'slide'
		// 	});
		// }else{
		// 	_.assignIn(setObject, {			
		// 		onfirsttap: null
		// 	});
		// }

		_.assignIn(setObject, {		
			onfirsttap: true
		});
		

		this.setState(setObject);
	}

	handleMove(e) {
		console.log('touch', e.touches[0].clientX);
	}

	render() {

		let outsideWrapper = {
			width: '100%',
			backgroundColor: 'white',
			position: 'relative'
		}

		let imageStyle = {
			width: '100%',
			height: 'auto',
			display: 'block'
		}

		let sliderText = {
			position: 'absolute',
		    top: '40%',
		    left: '52%',
		    zIndex: 9999,
		    backgroundColor: (this.props.slideBtnColor) ? this.props.slideBtnColor :'#000',
		    color: (this.props.slideBtnTxtColor) ? this.props.slideBtnTxtColor :'#fff',
		    fontSize: '15px',
		    display: 'block',
		    width: '56px',
		    height: '30px',
		    textAlign: 'center',
		    verticalAlign: 'middle',
		    paddingTop: '5px',
		    marginLeft: '-28px',
		    marginTop: '-15px',
			borderRadius: '4px',
			fontWeight: 'bold',
			textTransform: 'uppercase'
		}

		if (this.state.onfirsttap) {
			_.assignIn(sliderText, {
				display: 'none'
			})
		}

		let afterImage = {
			position: 'absolute',
			top: 0,
			left: 0,
			width: this.state.position + '%',
			maxWidth: '100%',
			height: '100%',
			backgroundImage: 'url('+ this.props.before +')',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'
		}

		return(
				<div>
					<div style={outsideWrapper} onTouchStart={this.handleClick.bind(this)} onTouchMove={this.handleClick.bind(this)}  >
						<img style={imageStyle} src={this.props.after} />
						<div style={afterImage}></div>
						<div style={sliderText}>slide</div>
					</div>

				</div>

		);
	}
}