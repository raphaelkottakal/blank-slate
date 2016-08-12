import React from 'react';
// import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import 'normalize.css/normalize.css';
import '../css/main.css';
import SliderGroup from './slide-group';
import sliderGroupData from '../data/slider-group';
import YouTube from 'react-youtube';

import axios from 'axios';

export default class Page extends React.Component {

	constructor() {
		super()
		this.state = {
			dataLoaded: false,
			error: false,
			data: null
		}
	}

	getContainerStyles() {
		return {
			minHeight: window.innerHeight,
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
		}
	}

	csvJSON(csv){

	  var lines=csv.split("\n");

	  var result = [];

	  var headers=lines[0].split(",");
	  	// console.log(headers)

	  for(var i=0;i<lines.length - 1;i++){

		  var obj = {};
		  var currentline=lines[i].split(",");

		  for(var j=0;j<headers.length;j++){
		  		if (j % 2 == 1) {
			  		obj['rank'] = currentline[j];
		  			
		  		} else {
			  		obj['email'] = currentline[j];

		  		}
		  }

		  result.push(obj)

	  }
	  
	  //return result; //JavaScript object
	  // console.log(result)
	  return result; //JSON
	}

	componentDidMount() {
		axios.get('data.csv')
		  .then((response) => {

		    const jsData = this.csvJSON(response.data)
		    // console.log(jsData);
		  	this.setState({
		  		dataLoaded: true,
		  		data: this.csvJSON(response.data)
		  	});
		  	// console.log(this.refs.contest)
		  })
		  .catch((error) => {
		  	// this.refs.contest.innerHTML('hi');
		  	this.setState({
		  		error: true
		  	});
		    console.log(error);
		  });
	}

	replaceBetween(start, end, what,string) {
    return string.substring(0, start) + what + string.substring(end);
};

	maskEmailString(string) {

		let newString


		newString = string
		// console.log(newString.indexOf('@'))
		// console.log(newString.indexOf('@') - 4)
		// console.log(newString)

		newString = this.replaceBetween(newString.indexOf('@') - 4,newString.indexOf('@'), '*****', string);


		return newString
	}

	renderTopShoppers() {

		if (this.state.dataLoaded && this.state.data) {
			const elements = this.state.data.map((val,key)=>{
				// console.log(val);
				const email = val.email.replace(/\"/g, "")
				const rank = val.rank.replace(/\"/g, "")
				// console.log(val.rank.length.replace(/['"]+/g, ''))
				return(<div key={key}>
						{rank}: {this.maskEmailString(email)}
					</div>)
			});
			return (elements)
		}

		return 'Loading...'
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

		const css = {
			table: {
				display: 'table',
				height: '100%'
			},
			tableCell: {
				display: 'table-cell',
				verticalAlign: 'middle'
			},
			centerMode: {
				height: '64%',
				position:'absolute',
				top: '28%',
				padding: 8,
				right: 0,
				width: '43%',
				marginRight: '2%',
				fontSize: 9,
				color: '#02286A',
				background: '#f1f1f1',

			}
		}

		return(
			<div style={this.getContainerStyles()}>

				<div>
				<a href="http://www.myntra.com/true-blue-all" target="_blanck"><img src="http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470992778222-TB-LP_top-banner.jpg" alt="true Blue" style={{width: '100%'}} /></a>
						
						

					<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470992945501-Master-blaster_06.jpg'} style={{width:'100%'}}/>

					<div style={{width: '100%', position: 'relative'}}>
						<div  style={{width: '50%', float: 'left'}}>
						<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987292899-True-Blue_Pre-launch_04.jpg'} style={{width:'100%'}}/>
						<a href="http://www.myntra.com/radium/terms/true-blue/index.html" target="_blanck"><img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987716237-True-Blue_Pre-launch_08.jpg'} style={{width:'100%'}}/></a>

						</div>
						<img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987841138-True-Blue_Pre-launch_06.jpg'} style={{width: '46%', borderLeft: '2px solid #A5B3CA', marginLeft: 10}}/>

							<div style={css.centerMode}>
								<div style={css.table}>
									<div ref="contest" style={css.tableCell}>{this.renderTopShoppers()}</div>
								</div>
							</div>
					</div>

					

					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470988206997-True-Blue_Pre-launch_36.jpg' style={{width:'100%'}}/>

					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987716140-True-Blue_Pre-launch_10.jpg' style={{width:'100%'}}/>

					<a href="http://www.myntra.com/indigo-trueblue" target="_blanck"><img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11471002559735-Indigo-'} style={{width:'100%'}}/></a>
					<a href="http://www.myntra.com/natural-pastel-trueblue" target="_blanck"><img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11471002716320-Natural-Pastels.jpg'} style={{width:'100%'}}/></a>
					<a href="http://www.myntra.com/natural-grey-true-blue" target="_blanck"><img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11471002559710-Natural-Greys-_02.jpg'} style={{width:'100%'}}/></a>
					<a href="http://www.myntra.com/sptb" target="_blanck"><img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11471002559650-Spice.jpg'} style={{width:'100%'}}/></a>

					<a href="http://www.myntra.com/jeweltone-trueblue" target="_blanck"><img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11471002559755-Geo-Jewels.jpg'} style={{width:'100%'}}/></a>

					<a href="http://www.myntra.com/silvercoll-from-trueblue" target="_blanck"><img src={'http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11471002559679-Silvery-Filigree.jpg'} style={{width:'100%'}}/></a>



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
					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11471002559697-Sachin-quote.jpg' style={{width:'100%'}}/>
						
					
					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470988206997-True-Blue_Pre-launch_36.jpg' style={{width:'100%', margin: '21px 0 0'}}/>






					<SliderGroup data={sliderGroupData}></SliderGroup>


					<a href="http://www.myntra.com/true-blue-all" target="_blanck"><img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987716052-True-Blue_Pre-launch_34.jpg' style={{width:'100%',marginTop:30}}/></a>

					
					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470988206997-True-Blue_Pre-launch_36.jpg' style={{width:'100%', margin: '31px 0 0'}}/>
					
					<img src='http://assets.myntassets.com/assets/images/lookbook/2016/8/12/11470987716038-True-Blue_Pre-launch_37.jpg' style={{width:'100%'}}/>


					<div style={{marginBottom:25}}><YouTube
						videoId="ZxO4QdbCits"
						opts={videoOptions}
						
						/></div>

				</div>
				
			</div>

		);

	}
		

}