import React from 'react';

export default class TopNav extends React.Component {

	render() {

		const css = {
			outsideWrapper: {
				width: '100%',
				backgroundColor: 'white',
				position: 'fixed',
				top: 0,
				left: 0,
				borderBottom: '1px solid gray',
				overflowX: 'scroll',
				zIndex: 99999
			},
			insideWrapper: {
				width:this.props.children.length * this.props.childWidth
			},
		}

		return(
					<div style={css.outsideWrapper}>
						<div style={css.insideWrapper}>
							{this.props.children}
						</div>
					</div>

		);
	}
}