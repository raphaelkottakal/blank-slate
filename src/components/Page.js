import React from 'react';
// import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import 'normalize.css/normalize.css';
import '../css/main.css';
import SliderGroup from './slide-group';
import sliderGroupData from '../data/slider-group';
import YouTube from 'react-youtube';


export default class Page extends React.Component {

	getContainerStyles() {
		return {
			minHeight: window.innerHeight,
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
		}
	}



	render() {

		// console.log('test', sliderGroupData);
		const videoOptions = {
			width:'100%',
			height:'auto',
			playerVars: 0,
			controls: 0,
			showinfo: 0,
			color: 'white',
		   // color: 'black'
		};

		var settings = {
			dots: true,
			infinite: true,
			speed: 250,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			centerMode: true,
			arrows: false
		}

		return(
			<div style={this.getContainerStyles()}>

				<div>
					<div class='wrapper-class' style={{width: '100%'}}>
						<img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986628657-LP_Top-banner_02.jpg" alt="true Blue" style={{width: '30%'}} />
						<img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986628676-LP_Top-banner_03.jpg" alt="true Blue" style={{width: '30%'}} />
						<img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986628704-LP_Top-banner_04.jpg" alt="true Blue" style={{width: '30%'}} />

					</div>

					<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987292958-True-Blue_Pre-launch_03.jpg'} style={{width:'100%'}}/>

					<div class='wrapper-master' style={{width: '100%'}}>
						<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987292899-True-Blue_Pre-launch_04.jpg'} style={{width:'50%'}}/>

						<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987841138-True-Blue_Pre-launch_06.jpg'} style={{width:'50%'}}/>
					</div>

					

					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470988206997-True-Blue_Pre-launch_36.jpg' style={{width:'100%'}}/>

					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987716140-True-Blue_Pre-launch_10.jpg' style={{width:'100%'}}/>

					<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470985940359-True-Blue_Pre-launch_11.jpg'} style={{width:'100%'}}/>
					<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470985940335-True-Blue_Pre-launch_12.jpg'} style={{width:'100%'}}/>
					<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470985940314-True-Blue_Pre-launch_15.jpg'} style={{width:'100%'}}/>
					<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470985940291-True-Blue_Pre-launch_16.jpg'} style={{width:'100%'}}/>

					<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470985940273-True-Blue_Pre-launch_17.jpg'} style={{width:'100%'}}/>

					<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470985940255-True-Blue_Pre-launch_18.jpg'} style={{width:'100%'}}/>



					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470988206997-True-Blue_Pre-launch_36.jpg' style={{width:'100%'}}/>





					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987716113-True-Blue_Pre-launch_20.jpg' style={{width:'100%'}}/>
				

					<div class='wrapper-cat' style={{width: '100%'}}>						
						<img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986176855-True-Blue_Pre-launch_21.jpg" alt="true Blue" style={{width: '33.3%'}} />	
						<img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986176835-True-Blue_Pre-launch_22.jpg" alt="true Blue" style={{width: '33.3%'}} />
						<img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986176808-True-Blue_Pre-launch_23.jpg" alt="true Blue" style={{width: '33.3%'}} />
					</div>


					<div class='wrapper-cat' style={{width: '100%'}}>						
						<img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986176776-True-Blue_Pre-launch_24.jpg" alt="true Blue" style={{width: '33.3%'}} />
						<img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986176743-True-Blue_Pre-launch_25.jpg" alt="true Blue" style={{width: '33.3%'}} />
						<img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986176712-True-Blue_Pre-launch_26.jpg" alt="true Blue" style={{width: '33.3%'}} />
					</div>					
					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470988206997-True-Blue_Pre-launch_36.jpg' style={{width:'100%', margin: '21px 0'}}/>
					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987716077-True-Blue_Pre-launch_29.jpg' style={{width:'100%'}}/>
						
					
					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470988206997-True-Blue_Pre-launch_36.jpg' style={{width:'100%', margin: '21px 0 0'}}/>






					<SliderGroup data={sliderGroupData}></SliderGroup>


					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470988206997-True-Blue_Pre-launch_36.jpg' style={{width:'100%', margin: '31px 0 0'}}/>
					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987716038-True-Blue_Pre-launch_37.jpg' style={{width:'100%'}}/>


					{<YouTube
						videoId="ULXJvY8p6U0"
						opts={videoOptions}
						/>}

				</div>
				
			</div>

		);

	}
		

}