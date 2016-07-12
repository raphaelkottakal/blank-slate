import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

import Scroll from 'react-scroll';
import { Link, Element, Events } from 'react-scroll';

import TopNav from './TopNav';

export default class Page extends React.Component {

	render() {

		const topNavHeight = 50;
		const topNavItemWidth = 100;

		const css = {
			mainContainer: {
				marginTop: topNavHeight
			},
			topMenuItem: {
				display: 'block',
				float: 'left',
				borderRight: '1px solid gray',
				borderLeft: '1px solid gray',
				// backgroundColor: 'tomato',
				width: topNavItemWidth,
				height: topNavHeight,
				textAlign: 'center'
			},
			sectionContainer: {
				minHeight: 100,
			}
		}

		return(
			<div style={css.mainContainer}>

				<TopNav childWidth={topNavItemWidth}>
					<Link style={css.topMenuItem} to="one" spy={true} offset={-50} smooth={true} duration={500} >
						<img src="http://placehold.it/100x50/ffffff/c0392b/&text=ONE" />
					</Link>
					<Link style={css.topMenuItem} to="two" spy={true} offset={-50} smooth={true} duration={500} >
						<img src="http://placehold.it/100x50/ffffff/c0392b/&text=TWO" />
					</Link>
					<Link style={css.topMenuItem} to="three" spy={true} offset={-50} smooth={true} duration={500} >
						<img src="http://placehold.it/100x50/ffffff/c0392b/&text=THREE" />
					</Link>
					<Link style={css.topMenuItem} to="four" spy={true} offset={-50} smooth={true} duration={500} >
						<img src="http://placehold.it/100x50/ffffff/c0392b/&text=FOUR" />
					</Link>
					<Link style={css.topMenuItem} to="five" spy={true} offset={-50} smooth={true} duration={500} >
						<img src="http://placehold.it/100x50/ffffff/c0392b/&text=FIVE" />
					</Link>
					
				</TopNav>

				<Element name="one">
					<div>
						<h1>Section one</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a scelerisque lacus. Duis luctus turpis eros, imperdiet egestas felis aliquam sit amet. Suspendisse efficitur, nunc quis rutrum tristique, ligula purus gravida odio, non pharetra felis ligula non nibh. Aenean posuere mi non elementum sodales. Sed mollis tempus enim, id condimentum mi accumsan nec. Ut mauris lectus, condimentum ac molestie sit amet, facilisis maximus erat. Etiam eget ullamcorper magna. Nullam nec elementum dolor, nec molestie orci.</p>
						<p>Aliquam hendrerit elementum tortor quis tincidunt. Fusce vitae quam non arcu efficitur dictum. Morbi lacinia elit nec pellentesque iaculis. Suspendisse dapibus, ligula semper faucibus vestibulum.</p>
					</div>
				</Element>

				<Element name="two">
					<div>
						<h1>Section two</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a scelerisque lacus. Duis luctus turpis eros, imperdiet egestas felis aliquam sit amet. Suspendisse efficitur, nunc quis rutrum tristique, ligula purus gravida odio, non pharetra felis ligula non nibh. Aenean posuere mi non elementum sodales. Sed mollis tempus enim, id condimentum mi accumsan nec. Ut mauris lectus, condimentum ac molestie sit amet, facilisis maximus erat. Etiam eget ullamcorper magna. Nullam nec elementum dolor, nec molestie orci.</p>
						<p>Aliquam hendrerit elementum tortor quis tincidunt. Fusce vitae quam non arcu efficitur dictum. Morbi lacinia elit nec pellentesque iaculis. Suspendisse dapibus, ligula semper faucibus vestibulum.</p>
					</div>
				</Element>


				<Element name="three">
					<div>
						<h1>Section three</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a scelerisque lacus. Duis luctus turpis eros, imperdiet egestas felis aliquam sit amet. Suspendisse efficitur, nunc quis rutrum tristique, ligula purus gravida odio, non pharetra felis ligula non nibh. Aenean posuere mi non elementum sodales. Sed mollis tempus enim, id condimentum mi accumsan nec. Ut mauris lectus, condimentum ac molestie sit amet, facilisis maximus erat. Etiam eget ullamcorper magna. Nullam nec elementum dolor, nec molestie orci.</p>
						<p>Aliquam hendrerit elementum tortor quis tincidunt. Fusce vitae quam non arcu efficitur dictum. Morbi lacinia elit nec pellentesque iaculis. Suspendisse dapibus, ligula semper faucibus vestibulum.</p>
					</div>
				</Element>

				<Element name="four">
					<div>
						<h1>Section four</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a scelerisque lacus. Duis luctus turpis eros, imperdiet egestas felis aliquam sit amet. Suspendisse efficitur, nunc quis rutrum tristique, ligula purus gravida odio, non pharetra felis ligula non nibh. Aenean posuere mi non elementum sodales. Sed mollis tempus enim, id condimentum mi accumsan nec. Ut mauris lectus, condimentum ac molestie sit amet, facilisis maximus erat. Etiam eget ullamcorper magna. Nullam nec elementum dolor, nec molestie orci.</p>
						<p>Aliquam hendrerit elementum tortor quis tincidunt. Fusce vitae quam non arcu efficitur dictum. Morbi lacinia elit nec pellentesque iaculis. Suspendisse dapibus, ligula semper faucibus vestibulum.</p>
					</div>
				</Element>

				<Element name="five">
					<div>
						<h1>Section five</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a scelerisque lacus. Duis luctus turpis eros, imperdiet egestas felis aliquam sit amet. Suspendisse efficitur, nunc quis rutrum tristique, ligula purus gravida odio, non pharetra felis ligula non nibh. Aenean posuere mi non elementum sodales. Sed mollis tempus enim, id condimentum mi accumsan nec. Ut mauris lectus, condimentum ac molestie sit amet, facilisis maximus erat. Etiam eget ullamcorper magna. Nullam nec elementum dolor, nec molestie orci.</p>
						<p>Aliquam hendrerit elementum tortor quis tincidunt. Fusce vitae quam non arcu efficitur dictum. Morbi lacinia elit nec pellentesque iaculis. Suspendisse dapibus, ligula semper faucibus vestibulum.</p>
					</div>
				</Element>
			</div>			
		);

	}

}