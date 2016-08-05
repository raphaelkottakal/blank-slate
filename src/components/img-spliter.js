import React from 'react';
import ImageLoader from 'react-imageloader';
import _ from 'lodash';
import SplitGroupData from '../data/split-grp';


export default class imgSpliter extends React.Component {

	getTextStyles() {
		return {

				textAlign: 'center',
			  
			    fontSize: '24px',
			    letterSpacing: '1.4px',
			    textAlign: 'center',
				width: '60%',
			    borderBottom: '1px solid #000',
			    marginLeft: '22%',
			    paddingBottom: '5px',
			    fontWeight:'500'

		}
	} 


	createSplit(){

		const splitSection = this.props.data.splitSection.map((splitblock, i)=>{
			
			console.log(splitblock.link, splitblock.img, splitblock.text);

			return (
			
				<div style={{width:'50%', display:'inline-block'}}>

				<p style={this.getTextStyles()}>{splitblock.text}</p>

					<a href={splitblock.link}>

						<img src={splitblock.img} style={{width:'100%'}}/>

					</a>

					

				</div>
			)
		});

		return splitSection ;
	}

	render(){
		// console.log(this.createSplit());
		return(
			
			<div>
				
				{this.createSplit()}

			</div>
		);
	}
}

 // style={this.props.data.font,this.props.data.fontSize}