import React from 'react';

import '../css/animation.css';


export default class ImageLinker extends React.Component {

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


	render() {

		const css = {
			container: {
				position: 'relative',
			},
			img: {
				display: 'block',
				maxWidth: '100%',
			}
		}

		return(
			<div style={css.container}>
				<img style={css.img} src={this.props.image} />
				{this.createLinkPoints()}
			</div>			
		);

	}

}