import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';
import sliderGroupData from '../data/slider-group';
import SliderGroup from './slide-group';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

export default class Page extends React.Component {

	render() {

		const videoOptions = {
			width:'100%',
			height:window.innerWidth * (9/16),
			playerVars: {
				controls: 0,
				showinfo: 0,
				rel: 0,
			}
		};

		return(
			<div>
				<a href="http://www.myntra.com/user/me" target="_blank"><img src="http://assets.myntassets.com/assets/images/lookbook/love-lavie/2016/9/16/11474003009645-Lavie_collections_LP1_01.jpg" alt="Lavie_collections" /></a>
				<a href="http://www.myntra.com/user/me" target="_blank"><img src="http://assets.myntassets.com/assets/images/lookbook/love-lavie/2016/9/16/11474008478557-Lavie_collections_LP1_02.jpg" alt="Lavie_collections" /></a>
				<a href="http://myntra.com/u/laviebags" target="_blank"><img src="http://assets.myntassets.com/assets/images/lookbook/love-lavie/2016/9/16/11474003009607-Lavie_collections_LP1_03.jpg" alt="Lavie_collections" /></a>
				<img src="http://assets.myntassets.com/assets/images/lookbook/love-lavie/2016/9/16/11474003009592-Lavie_collections_LP1_04-1.jpg" alt="Lavie_collections" />
								
				<div style={{marginBottom:25}}>
					<YouTube
						videoId="iOOUgX2giaI"
						opts={videoOptions}						
					/>
				</div>

				<img src="http://assets.myntassets.com/assets/images/lookbook/love-lavie/2016/9/16/11474003009574-Lavie_collections_LP1_05.jpg" alt="Lavie_collections" />
				
				<SliderGroup data={sliderGroupData}></SliderGroup>


				<a href="http://myntra.com/u/laviebags" target="_blank"><img src="http://assets.myntassets.com/assets/images/lookbook/love-lavie/2016/9/16/11474003009557-Lavie_collections_LP1_07.jpg" alt="Lavie_collections" /></a>
				<a href="http://www.myntra.com/lavie?f=categories%3AHandbags" target="_blank"><img src="http://assets.myntassets.com/assets/images/lookbook/love-lavie/2016/9/16/11474003009539-Lavie_collections_LP1_08.jpg" alt="Lavie_collections" /></a>
			</div>			
		);

	}

}