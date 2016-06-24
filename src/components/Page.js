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


	render() {

		const animation = {
			color: this.state.one ? '#32CD32' : '#FF6347'
		}

		return(
			<div>
				<div>
					
				</div>
				<VelocityComponent animation={animation} duration={500}>
					<div>
						<div>Hello world!</div>
					</div>
				</VelocityComponent>
				<button onClick={this.handleToggle.bind(this,'one')}>Toggle</button>
			</div>			
		);

	}

}