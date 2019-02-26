import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import brain from './brainy.png';
const Logo=()=>{

	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{speed: 300, max : 35 }} style={{ height: 100, width: 100 }} >
			 	<div className="Tilt-inner pa3"> 
			 		<img style={{paddingTop:'10px'}} alt='brainn' src={brain} /> 
			 	</div>
			</Tilt>

		</div>


	)
	}
export default Logo;