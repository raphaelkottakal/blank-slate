import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

import VideoStory from './VideoStory';

export default class Page extends React.Component {

	render() {

		const videoData = [
			{
				time: 0,
				text:'This is the text before the video loads.',
				bgColor: 'hsla(0,0%,0%,0.5)',
				color:'white',
			},
			{
				time: 5,
				text:'This paused the video at a specific time.',
				bgColor: 'hsla(0,50%,50%,0.5)',
				color:'white',
			},
			{
				time: 10,
				text:'You can controle text, text color, background color and pause time',
				bgColor: 'hsla(200,50%,50%,0.5)',
				color:'white',
			},
			{
				time: 20,
				text:'So let\'s do some crazzy shizz!',
				bgColor: 'hsla(120,50%,50%,0.5)',
				color:'white',
			},
			{
				time: 28,
				text:'That\'s all...',
				bgColor: 'hsla(80,50%,50%,0.5)',
				color:'white',
			}
		]

		return(
			<div>

				<VideoStory data={videoData} />
			</div>			
		);

	}

}