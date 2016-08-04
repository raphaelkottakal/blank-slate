import React from 'react';
import ImageLoader from 'react-imageloader';
import _ from 'lodash';
import SplitGroupData from '../data/split-grp';


export default class imgSpliter extends React.Component {


	createSplit(){

		const splitSection = this.props.data.splitSection.map((splitimg, i)=>{
			
			console.log(splitimg.link, splitimg.img, splitimg.text);

			return (
			
				<div>
					<a href={splitimg.link}>

						<img src={splitimg.img}  style={{width:'50%'}}/>

					</a>

					<p>{splitimg.text}</p>

				</div>
			)
		});

	}

	render(){
		console.log(this.createSplit());
		return(
			
			<div>
				<p>hi</p>
				{this.createSplit()}

			</div>
		);
	}
}

 // style={this.props.data.font,this.props.data.fontSize}