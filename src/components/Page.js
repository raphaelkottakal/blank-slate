import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

export default class Page extends React.Component {

	render() {

		return(
			<div>
				<img src="http://assets.myntassets.com/assets/images/lookbook/nike-bra/2016/9/9/11473424813270-pro-bra-boutique-s-3_01.jpg" alt="nike logo"/>
				<img src="http://assets.myntassets.com/assets/images/lookbook/nike-bra/2016/9/9/11473424813253-pro-bra-boutique-s-3_03.jpg" alt="nike" />
				<img src="http://assets.myntassets.com/assets/images/lookbook/nike-bra/2016/9/9/11473424813232-pro-bra-boutique-s-3_04.jpg" alt="nike" />
				<a href="http://www.myntra.com/nikeindy" target="_blank"><img src="http://assets.myntassets.com/assets/images/lookbook/nike-bra/2016/9/9/11473424813211-pro-bra-boutique-s-3_05.jpg" alt="nike" /></a>
				<img src="http://assets.myntassets.com/assets/images/lookbook/nike-bra/2016/9/9/11473424813188-pro-bra-boutique-s-3_06.jpg" alt="nike" />
				<a href="http://www.myntra.com/nikeclassic" target="_blank"><img src="http://assets.myntassets.com/assets/images/lookbook/nike-bra/2016/9/9/11473424813172-pro-bra-boutique-s-3_07.jpg" alt="nike" /></a>
				<img src="http://assets.myntassets.com/assets/images/lookbook/nike-bra/2016/9/9/11473424813158-pro-bra-boutique-s-3_08.jpg" alt="nike"/>
				<a href="http://www.myntra.com/nikehyperclassic" target="_blank"><img src="http://assets.myntassets.com/assets/images/lookbook/nike-bra/2016/9/9/11473424813139-pro-bra-boutique-s-3_09.jpg" alt="nike"/></a>
				<img src="http://assets.myntassets.com/assets/images/lookbook/nike-bra/2016/9/9/11473424813120-pro-bra-boutique-s-3_10.jpg" alt="nike"/>
				<a href="http://www.myntra.com/nikerival" target="_blank"><img src="http://assets.myntassets.com/assets/images/lookbook/nike-bra/2016/9/9/11473424813102-pro-bra-boutique-s-3_11.jpg" alt="nike" style={{paddingBottom: '20px', backgroundColor: '#F2DED5'}} /></a>
			</div>			
		);

	}

}