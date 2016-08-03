import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash'

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

export default class Pairing extends React.Component {

	constructor(props) {
		super(props)
		let initState = {}
		_.forEach(props.data, (val,key)=>{
			initState[val.title] = false
		})

		this.state = initState
	}

	componentDidMount() {

	}
	
	handelSectionClick(e) {

		let stateKey = e.target.querySelector('.title').textContent;

		let newState = {}

		_.forEach(this.state, (val,key)=>{
			if (key != stateKey) {
				newState[key] = false
			}
		})

		newState[stateKey] = !this.state[stateKey]

		this.setState(newState)
		
	}

	makeSections() {
		const sections = this.props.data.map((val,key)=>{
			const css = {
				container: {
					backgroundImage: 'url('+ val.image +')',
					backgroundPosition: (this.state[val.title]) ? 'center -10%' : '120% -5%',
					backgroundSize: '150%',
					backgroundRepeat: 'no-repeat',
					minHeight: (this.state[val.title]) ? 300 : 100
				},
				title: {
					textAlign: 'right'
				}
			}
			return (
				<div key={key} onClick={this.handelSectionClick.bind(this)} style={css.container}>
					<div className="title" style={css.title}>{val.title}</div>
				</div>
			)
		});

		return sections
	}

	render() {


		return(
			<div>			
				{this.makeSections()}
			</div>			
		);

	}

}