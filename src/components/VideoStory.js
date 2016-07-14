import React from 'react';

import { find } from 'lodash';

export default class VideoStory extends React.Component {

	constructor() {
		super();
		this.state = {
			lastItemTime: null,
			currentItemTime: null,
			text: null,
			color: null,
			bgColor: null,
			paused: true
		}
	}

	componentDidMount() {

		const video = this.refs.video;

		video.addEventListener('timeupdate', () => {
			this.checkTimeForUpdate();
		});

		video.addEventListener('ended', () => {
			this.setState({
				paused: true
			});
			this.setVideoTime(0);
		});

		this.setFirstItem();
		
	}

	setFirstItem() {
		const itemZero = find(this.props.data, (o) => {
			return o.time == 0;
		});

		const { time, text, color, bgColor } = itemZero;

		this.setState({
			currentItemTime: time,
			text,
			color,
			bgColor,
		});
	}

	checkTimeForUpdate() {
		const currentItem = find(this.props.data, (o) => {
			const currentTime = this.getVideoCurrentTime();
			return o.time == currentTime;
		});

		if (currentItem && currentItem.time != this.state.currentItemTime) {

			const { time, text, color, bgColor } = currentItem;

			this.setState({
				lastItemTime: this.state.currentItemTime,
				currentItemTime: time,
				text,
				color,
				bgColor
			});

			this.pauseVideo();
			// console.log(currentItem);
		}

	}



	getVideoCurrentTime() {
		const currentTime = Math.floor(this.refs.video.currentTime);

		return currentTime;
	}

	playVideo() {
		const video = this.refs.video;
		video.play();

		this.setState({
			paused: false
		});
	}

	pauseVideo() {
		const video = this.refs.video;
		video.pause();

		this.setState({
			paused: true
		});
	}

	setVideoTime(time) {
		const video = this.refs.video;
		video.currentTime = time;
	}


	handleControlPlayClick() {
		if(this.state.paused) {
			this.playVideo();
		} else{
			this.pauseVideo();
		}
	}

	handleControlBackClick() {
		this.setVideoTime(this.state.lastItemTime);
	}

	render() {

		const css = {
			container: {
				position: 'relative',
				width: '100%',
				overflow: 'hidden',
			},
			video: {
				display: 'block',
				// minWidth: '100%',
				// minHeight: '100%',
				// width: 'auto',
				width: '100%',
				height: 'auto',
				// top: 0,
				// left: 0
			},
			content: {
				fontSize: 14,
				backgroundColor: this.state.bgColor,
				position: 'absolute',
				top: 0,
				left: (!this.state.paused) ? -1000 : 0,
				margin: 16,
				padding: 8,
				color: this.state.color,
				'MozTransition': 'all 300ms ease',
				'OTransition': 'all 300ms ease',
				'WebkitTransition': 'all 300ms ease',
				transition: 'all 300ms ease'
			},
			controlPlay: {
				position: 'absolute',
				bottom: 16,
				right: (!this.state.paused) ? '-100%' : 16,
				backgroundColor: 'hsla(80,30%,50%,0.5)',
				color: 'white',
				padding: 8,
				'MozTransition': 'all 300ms ease',
				'OTransition': 'all 300ms ease',
				'WebkitTransition': 'all 300ms ease',
				transition: 'all 300ms ease'
			},
			controlBack: {
				position: 'absolute',
				bottom: 16,
				left: (!this.state.paused) ? '-100%' : 16,
				backgroundColor: 'hsla(0,30%,50%,0.5)',
				color: 'white',
				padding: 8,
				'MozTransition': 'all 300ms ease',
				'OTransition': 'all 300ms ease',
				'WebkitTransition': 'all 300ms ease',
				transition: 'all 300ms ease'
			},
			shopBtn: {
				backgroundColor: 'hsla(0,30%,50%,0.5)',
				padding: 8,
				color: 'white',
				display: 'block',
				textAlign: 'center',
				textDecoration: 'none'
			}
		}

		const backBtn = <div onClick={this.handleControlBackClick.bind(this)} style={css.controlBack}>BACK</div>

		return(
			<div>
				<div style={css.container}>
					<video ref="video" poster="http://assets.myntassets.com/v1468496206/radium/loop-min.png" style={css.video}>
					  <source src="http://res.cloudinary.com/myntra-com/video/upload/v1468412438/radium/videoplayback.mp4" type="video/mp4" />
					  Your browser does not support HTML5 video.
					</video>
					<div style={css.content}>{this.state.text}</div>
					<div onClick={this.handleControlPlayClick.bind(this)} style={css.controlPlay}>NEXT</div>
					{/*(this.state.lastItemTime != null) ? backBtn : ''*/}
				</div>
				<a href="http://www.myntra.com/shoes" target="_blank" style={css.shopBtn}>Shop Now</a>
			</div>
		);

	}

}