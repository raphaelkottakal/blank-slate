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
				<a href="http://www.myntra.com/true-blue-all" target="_blanck"><img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470992778222-TB-LP_top-banner.jpg" alt="true Blue" style={{width: '100%'}} /></a>
						
						

					<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470992945501-Master-blaster_06.jpg'} style={{width:'100%'}}/>

					<div class='wrapper-master' style={{width: '100%'}}>
						<div  style={{width: '50%', float: 'left'}}>
						<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987292899-True-Blue_Pre-launch_04.jpg'} style={{width:'100%'}}/>
						<a href="http://www.myntra.com/radium/terms/true-blue/index.html" target="_blanck"><img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987716237-True-Blue_Pre-launch_08.jpg'} style={{width:'100%'}}/></a>

						</div>
						<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987841138-True-Blue_Pre-launch_06.jpg'} style={{width: '46%', borderLeft: '2px solid #A5B3CA', marginLeft: 10}}/>

							<p style={{ position:'absolute', top: '11.5%', padding: 8, right: 21, fontSize: 14, color: '#02286A'}}>Watch This Space</p>
					</div>

					

					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470988206997-True-Blue_Pre-launch_36.jpg' style={{width:'100%'}}/>

					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987716140-True-Blue_Pre-launch_10.jpg' style={{width:'100%'}}/>

					<a href="http://www.myntra.com/indigo-trueblue" target="_blanck"><img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470985940359-True-Blue_Pre-launch_11.jpg'} style={{width:'100%'}}/></a>
					<a href="http://www.myntra.com/natural-pastel-trueblue" target="_blanck"><img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470985940335-True-Blue_Pre-launch_12.jpg'} style={{width:'100%'}}/></a>
					<a href="http://www.myntra.com/natural-grey-true-blue" target="_blanck"><img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470985940314-True-Blue_Pre-launch_15.jpg'} style={{width:'100%'}}/></a>
					<a href="http://www.myntra.com/sptb" target="_blanck"><img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470985940291-True-Blue_Pre-launch_16.jpg'} style={{width:'100%'}}/></a>

					<a href="http://www.myntra.com/jeweltone-trueblue" target="_blanck"><img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470985940273-True-Blue_Pre-launch_17.jpg'} style={{width:'100%'}}/></a>

					<a href="http://www.myntra.com/silvercoll-from-trueblue" target="_blanck"><img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470985940255-True-Blue_Pre-launch_18.jpg'} style={{width:'100%'}}/></a>



					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470988206997-True-Blue_Pre-launch_36.jpg' style={{width:'100%'}}/>





					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987716113-True-Blue_Pre-launch_20.jpg' style={{width:'100%'}}/>
				

					<div class='wrapper-cat' style={{width: '100%'}}>						
						<a href="http://www.myntra.com/shirts-from-trueblue" target="_blanck"><img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986176855-True-Blue_Pre-launch_21.jpg" alt="true Blue" style={{width: '33.3%'}} /></a>	
						<a href="http://www.myntra.com/tshirts-from-trueblue" target="_blanck"><img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986176835-True-Blue_Pre-launch_22.jpg" alt="true Blue" style={{width: '33.3%'}} /></a>
						<a href="http://www.myntra.com/jacket-suit-blazer-trueblue" target="_blanck"><img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986176808-True-Blue_Pre-launch_23.jpg" alt="true Blue" style={{width: '33.3%'}} /></a>
					</div>


					{/*<div class='wrapper-cat' style={{width: '100%'}}>						
						<a href="http://www.myntra.com/trousers-from-trueblue" target="_blanck"><img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986176776-True-Blue_Pre-launch_24.jpg" alt="true Blue" style={{width: '33.3%'}} /></a>
						<a href="http://www.myntra.com/jeans-from-trueblue" target="_blanck"><img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986176743-True-Blue_Pre-launch_25.jpg" alt="true Blue" style={{width: '33.3%'}} /></a>
						<a href="http://www.myntra.com/shorts-from-TrueBlue" target="_blanck"><img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470986176712-True-Blue_Pre-launch_26.jpg" alt="true Blue" style={{width: '33.3%'}} /></a>
					</div>*/}	



					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470988206997-True-Blue_Pre-launch_36.jpg' style={{width:'100%', margin: '21px 0'}}/>
					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987716077-True-Blue_Pre-launch_29.jpg' style={{width:'100%'}}/>
						
					
					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470988206997-True-Blue_Pre-launch_36.jpg' style={{width:'100%', margin: '21px 0 0'}}/>






					<SliderGroup data={sliderGroupData}></SliderGroup>


					<a href="http://www.myntra.com/true-blue-all" target="_blanck"><img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987716052-True-Blue_Pre-launch_34.jpg' style={{width:'100%',marginTop:30}}/></a>

					
					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470988206997-True-Blue_Pre-launch_36.jpg' style={{width:'100%', margin: '31px 0 0'}}/>
					
					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987716038-True-Blue_Pre-launch_37.jpg' style={{width:'100%'}}/>


					<div style={{marginBottom:25, position: 'absolute'}}><YouTube
						videoId="ZxO4QdbCits"
						opts={videoOptions}
						
						/></div>

				</div>
				
			</div>

		);

	}
		

}