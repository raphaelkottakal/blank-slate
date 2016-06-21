import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

import 'normalize.css/normalize.css';
import '../css/main.css';

export default class Page extends React.Component {

	

	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows:false,
			autoplay:true,
			infinite: true
			// slide:2
		};
		var style={
			textAlign:'center'
		},
		shopStyle={
			color:'black',
			textAlign: 'center',
			textDecoration: 'none',
			margin: '0 auto',
			display: 'block',
			backgroundColor: '#F9C7CC',
			padding: '2px',
			margin: '0 auto',
			width: '115px',
    		fontSize: '14px',
    		letterSpacing: '3px',
    		marginBottom: '25px'
		};

		return(
			<div>
		        <img src="http://assets.myntassets.com/v1466500057/SIS/beauty-store-eyes/Beauty_store-steps-53-min.jpg" style={{ width: '100%', height: 'auto'}}/>
				<Slider {...settings}>
					<div>
		        		<img src="http://assets.myntassets.com/v1466500056/SIS/beauty-store-eyes/Beauty_store-steps-01-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Moisturise your eyelids</p>
					</div>

					<div>
		        		<img src="http://assets.myntassets.com/v1466500056/SIS/beauty-store-eyes/Beauty_store-steps-03-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Apply primer or foundation</p>
					</div>

					<div>
		        		<img src="http://assets.myntassets.com/v1466500056/SIS/beauty-store-eyes/Beauty_store-steps-04-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Apply charcoal gray powder just above the crease of the lid</p>
					</div>

					<div>
		        		<img src="http://assets.myntassets.com/v1466500056/SIS/beauty-store-eyes/Beauty_store-steps-05-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Trace your upper lash line with a black pencil</p>
					</div>

					<div>
		        		<img src="http://assets.myntassets.com/v1466500056/SIS/beauty-store-eyes/Beauty_store-steps-06-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Gently smudge using your fingertip</p>
					</div>

					<div>
		        		<img src="http://assets.myntassets.com/v1466500057/SIS/beauty-store-eyes/Beauty_store-steps-07-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Sweep gunmetal shade on your lower lash line</p>
					</div>

					<div>
		        		<img src="http://assets.myntassets.com/v1466500057/SIS/beauty-store-eyes/Beauty_store-steps-16-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Apply silver powder on to the inner corner of the eyes</p>
					</div>

					<div>
		        		<img src="http://assets.myntassets.com/v1466500057/SIS/beauty-store-eyes/Beauty_store-steps-15-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Apply mascara</p>
					</div>
				</Slider>
				<a href="http://www.myntra.com/steps-to-ace-smokey-eyes?SRC=Radium" target="_blanck" style={shopStyle}>TRY NOW</a>





				<img src="http://assets.myntassets.com/v1466504514/SIS/beauty-store-eyes/Beauty_store-steps-title.jpg" style={{ width: '100%', height: 'auto'}}/>
				<Slider {...settings}>
					<div>
		        		<img src="http://assets.myntassets.com/v1466504514/SIS/beauty-store-eyes/Beauty_store-steps-1.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Prep your eyes by applying moisturiser</p>
					</div>

					<div>
		        		<img src="http://assets.myntassets.com/v1466504514/SIS/beauty-store-eyes/Beauty_store-steps-2.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Apply primer or foundation</p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466504514/SIS/beauty-store-eyes/Beauty_store-steps-3.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Use a medium-sized brush to apply a light blue shade all over the lid</p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466504514/SIS/beauty-store-eyes/Beauty_store-steps-4.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Use a darker shade of blue on the crease and blend well</p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466504514/SIS/beauty-store-eyes/Beauty_store-steps-5.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Trace your lash line with navy blue or indigo eyeliner</p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466504514/SIS/beauty-store-eyes/Beauty_store-steps-6.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Apply mascara for a dramatic effect</p>
					</div>
		        	
		        	<img src="http://assets.myntassets.com/v1466504515/SIS/beauty-store-eyes/Beauty_store-steps-7.jpg" style={{ width: '100%', height: 'auto'}}/>
		        	
		        	<img src="http://assets.myntassets.com/v1466504515/SIS/beauty-store-eyes/Beauty_store-steps-8.jpg" style={{ width: '100%', height: 'auto'}}/>
					
				</Slider>
				<a href="http://www.myntra.com/steps-to-get-electric-blue-eyes?SRC=Radium" target="_blanck" style={shopStyle}>TRY NOW</a>






				<img src="http://assets.myntassets.com/v1466505191/SIS/beauty-store-eyes/Beauty_store-steps-55-min.jpg" style={{ width: '100%', height: 'auto'}}/>
				<Slider {...settings}>
					<div>
		        		<img src="http://assets.myntassets.com/v1466505190/SIS/beauty-store-eyes/Beauty_store-steps-18-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Apply some moisturiser all over your eyelids</p>
					</div>

					<div>
		        		<img src="http://assets.myntassets.com/v1466505190/SIS/beauty-store-eyes/Beauty_store-steps-17-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Put on some eyeshadow in a shade closest to your skin tone</p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466505190/SIS/beauty-store-eyes/Beauty_store-steps-19-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Take your eyeliner and make a tiny dot at the corner of each eyelid</p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466505189/SIS/beauty-store-eyes/Beauty_store-steps-20-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Draw a thin line connecting this dot the end of your eyelid</p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466505190/SIS/beauty-store-eyes/Beauty_store-steps-21-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Draw another line to connect the dot to the middle of your eyelid</p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466505190/SIS/beauty-store-eyes/Beauty_store-steps-22-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Fill in this outline, making it as thick as you wish</p>
					</div>
					
					<div>		        	
		        		<img src="http://assets.myntassets.com/v1466505191/SIS/beauty-store-eyes/Beauty_store-steps-23-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Fill in this outline, making it as thick as you wish</p>
					</div>		        	
					
					<div>		        	
		        		<img src="http://assets.myntassets.com/v1466505191/SIS/beauty-store-eyes/Beauty_store-steps-24-min.jpg" style={{ width: '100%', height: 'auto'}}/>
						<p style={style}>Fill in this outline, making it as thick as you wish</p>
					</div>

					<div>		        	
		        		<img src="http://assets.myntassets.com/v1466505192/SIS/beauty-store-eyes/Beauty_store-steps-25-min.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Fill in this outline, making it as thick as you wish</p>
					</div>		        	
					
					<div>		        	
		        		<img src="http://assets.myntassets.com/v1466505192/SIS/beauty-store-eyes/Beauty_store-steps-26-min.jpg" style={{ width: '100%', height: 'auto'}}/>
						<p style={style}>Fill in this outline, making it as thick as you wish</p>
					</div>



				</Slider>
				<a href="http://www.myntra.com/steps-to-nail-the-cat-eye?SRC=Radium" target="_blanck" style={shopStyle}>TRY NOW</a>




				<img src="http://assets.myntassets.com/v1466506228/SIS/beauty-store-eyes/Beauty-store-steps-simple-day-title.jpg" style={{ width: '100%', height: 'auto'}}/>
				<Slider {...settings}>
					<div>
		        		<img src="http://assets.myntassets.com/v1466506362/SIS/beauty-store-eyes/Beauty_store-simple-day-step-1.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Moisturise your eyelids</p>
					</div>

					<div>
		        		<img src="http://assets.myntassets.com/v1466506362/SIS/beauty-store-eyes/Beauty_store-simple-day-step-2.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Apply primer or foundation</p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466506362/SIS/beauty-store-eyes/Beauty_store-simple-day-step-3.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Apply a matte eyeshadow in an earthy tone along the crease of your eyelid</p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466506364/SIS/beauty-store-eyes/Beauty_store-simple-day-step-4.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Take a brown eyeliner pencil and draw a smooth line, as close to your eyelash line as possible</p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466506365/SIS/beauty-store-eyes/Beauty_store-simple-day-step-5.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Follow this by applying a lighter shade of the same eyeshadow all over your eyelid</p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466506363/SIS/beauty-store-eyes/Beauty_store-simple-day-step-6.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Apply mascara </p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466506363/SIS/beauty-store-eyes/Beauty_store-simple-day-step-7.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}>Use a light eye pencil to line your lower lids and make your eyes look bigger and brighter. White is for people with fair skin while dull gold works for those who are slightly dusky.</p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466506363/SIS/beauty-store-eyes/Beauty_store-simple-day-step-8.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}> Finish by adding a touch of highlighter below your brow bone to give it more definition</p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466506364/SIS/beauty-store-eyes/Beauty_store-simple-day-step-9.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}> </p>
					</div>
					
					<div>
		        		<img src="http://assets.myntassets.com/v1466506365/SIS/beauty-store-eyes/Beauty_store-simple-day-step-10.jpg" style={{ width: '100%', height: 'auto'}}/>
		        		<p style={style}> </p>
					</div>
				</Slider>
				<a href="http://www.myntra.com/steps-to-master-simple-day-look?SRC=Radium" target="_blanck" style={shopStyle}>TRY NOW</a>

			</div>			
		);

	}

}