import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import {VelocityComponent, VelocityTransitionGroup, velocityHelpers} from 'velocity-react';
// import 'velocity-animate/velocity.ui';

export default class Page extends React.Component {

	constructor() {
		super();
		this.state = {
			one: true,
			two: true
		};
	}

	handleToggle(key) {

		switch (key) {
			case 'one':
				this.setState({
					one: !this.state.one
				});
				break;
			case 'two':
				this.setState({
					two: !this.state.two
				});
				break;
		}
		
	}

	handleTouch(e) {
		console.log(e.touches[0].target);
	}


	render() {

		const animation = {
			color: this.state.one ? '#FF6347': '#32CD32'
		};

		const footballAnimation = {
			left: this.state.one ? 50 : '100%',
			rotateZ: this.state.one ? 0 : 360,
		};

		const css = {
			container: {
				backgroundColor: 'limegreen',
				position: 'relative',
				padding: '16px 4px'
			},
			football: {
				width: 50,
				height: 'auto',
				position: 'relative',
				marginLeft: -50,
			}
		}

		return(
			<div onTouchStart={this.handleTouch.bind(this)}>
				<div onClick={this.handleToggle.bind(this,'one')} style={css.container}>
					<VelocityComponent animation={footballAnimation} duration={1000}>
						<img style={css.football} src="http://pngimg.com/upload/football_PNG1085.png" />
					</VelocityComponent>
				</div>
			</div>			
		);

	}

}