import React from 'react';

// import {Motion, spring} from 'react-motion';

export default class Slideimage extends React.Component{
	constructor(){
		super();
		this.state = { open: false };	
	}
	textStyles(){
		return {
			backgroundColor: 'rgb(45, 62, 78)',
			width: '100%',
			color:'#fff',
			padding: '2% 0',
			textAlign: 'center',
			margin: 0,
			left: '-100%'
		}
	}

	handleMouseDown() {
		this.setState({open: !this.state.open});
	}

	afterImageStyle(){
		return{
			// backgroundImage: 'url(http://assets.myntassets.com/v1461563423/Lookgood/Feed/makeover/april/Makeover-22.04.16--7.jpg)',
			backgroundRepeat: 'no-repeat',
			cursor: 'pointer',
			position: 'relative',
			zIndex: '999'
		}
	}


	render(){


		


		return(
			<div style={{ position:'relative'}}>
				<h3 style={this.textStyles()}>{this.props.textonimage} </h3>
				

				<div style={ this.afterImageStyle() }
						onClick={this.handleMouseDown.bind(this)}>
						<img src = {this.props.beforeImage} style={{ width: '100%'}} />	
				
					<Motion style={{x: spring(this.state.open ? 100 : 0)}}>
			          {({x}) =>
			            // children is a callback which should accept the current value of
			            // `style`

			            <div className= "bgimage" style={{
					                WebkitTransform: `translate(${x}%, 0)`,
					                transform: `translate(${x}%, 0)`,
					                height: '100%', overflow: 'hidden', position: 'absolute', top: '0%', width: '100%', left: '-100%'
					              }} >
							<img src = {this.props.afterImage} style={{ width: '100%'}} />
						</div>
			          }
			        </Motion>
				</div>

			</div>

		);
	}
}