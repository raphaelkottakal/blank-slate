import React from 'react';

import '../css/animation.css';


export default class ImageLinker extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			showLinks: false
		}
	}

	createLinkPoints() {

		const points = this.props.points.map((point,key) => {

			const css = {
				container: {
					display: 'block',
					position: 'absolute',
					top: point.top,
					left: point.left,
					padding: 10,
					// backgroundColor: 'tomato',
					marginTop: -15,
					marginLeft: -15,
				},
				point: {
					width: 10,
					height: 10,
					borderRadius: '50%',
					backgroundColor: point.color,
				}
			}

			return (
				<a href={point.link} target="_blank" key={key} style={css.container}>
					<div className="pulse-point" style={css.point}></div>
				</a>
			)
		});

		return points;
	}

	handleShowClick() {
		this.setState({
			showLinks: !this.state.showLinks
		});
	}


	render() {

		const css = {
			container: {
				position: 'relative',
			},
			img: {
				display: 'block',
				maxWidth: '100%',
			},
			showBtn: {
				color:'white',
				padding: '16px 8px',
				backgroundColor: (this.state.showLinks) ? 'tomato': 'limegreen'
			}
		}

		return(
			<div>
				<div style={css.container}>
					<img style={css.img} src={this.props.image} />
					{(this.state.showLinks)?this.createLinkPoints(): ''}
				</div>
				<div style={css.showBtn} onClick={this.handleShowClick.bind(this)}>{(this.state.showLinks) ? 'Hide Links': 'Show Links'} </div>
			</div>
		);

	}

}