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
			display: 'block',
			marginBottom: '12px'
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

		let nameStyle = {
			// position:'absolute',
			width:'100%',			
		    textAlign: 'center',
		    fontSize: '18px',
		    fontFamily: 'Playfair Display, serif',
		    margin: '16px 0 0',
		    fontWeight: '700'
		}

		let designationStyle = {
			// position:'absolute',
		    fontFamily: 'Playfair Display, serif',
			width:'100%',			
		    textAlign: 'center',
		    fontSize: '18px',
		    margin: '0',
		}

		let quotesStyle = {
			width:'100%',			
		    textAlign: 'center',
		    fontSize: '15px',
		    padding: '0 55px 25px',
		    marginTop: '-5%'
		}

		// let qotesTopStyle ={
		// 	position:'absolute',
		// 	top: '0px',
		// 	fontSize: '75px',
		// 	fontFamily: 'Playfair Display, serif',
		// 	marginLeft: '31px',
		// 	color: '#bcbbbb'
		// }
		let quoteStartStyle = {
		    display: 'inline',
		    marginLeft: '14px'
		}
		let quoteEndStyle = {
			display: 'inline',
			marginRight: '20px',
			float: 'right',
			marginTop: '-14%'		
		}

		// let quotesBottomStyle ={
		// 	position:'absolute',
		// 	bottom: -21,
		// 	right:0,
		// 	fontSize: '75px',
		// 	fontFamily: 'Playfair Display, serif',
		// 	marginRight: '31px',
		//     color: '#bcbbbb'

		// }
		let shopButton = {
		    width: '90px',
			height: '29px',
			margin: '10px auto',
			padding: '5px',
			textAlign: 'center',
			marginBottom: '14px',
			backgroundColor: '#666',
			color: '#fff',
    		textTransform: 'uppercase',
   			fontSize: '14px',
   			textDecoration: 'none',
   			display: 'block'
		}
		return(
				<div>
					<img style={imageStyle} src={this.props.masterImage} />
					<div style={outsideWrapper} onTouchStart={this.handleClick.bind(this)} onTouchMove={this.handleClick.bind(this)}  >
						<img style={imageStyle} src={this.props.after} />
						<div style={afterImage}></div>
						<div style={sliderText}>slide</div>
					</div>
					<div>
						<div style={nameStyle}>{this.props.name}</div>
						<div style={designationStyle}>{this.props.designation}</div>
					</div>

					<div style={{position:'relative'}}>
						<img style={quoteStartStyle} src={this.props.quoteStart} />
							<div style={quotesStyle}>{this.props.quotes}</div>
						<img style={quoteEndStyle} src={this.props.quoteEnd} />
					</div>
					<a style={shopButton} href={this.props.curationLink} target="_blanck">Shop now</a>
				</div>

		);
	}
}