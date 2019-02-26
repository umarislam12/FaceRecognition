import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm=({onInputChange,onButtonSubmit})=>{

	return(
		<div>
			<p className='f3 center'>
				{'this brain app will detect your real face you double faced people'}
			</p>
			<div className='center'>
				<div className=' form pa4 br3 shadow-5 center'>
				   <input className='f4 pa2 w-70 center' type='tex'onChange={onInputChange}/>
				   <button className=' w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
				   onClick={onButtonSubmit}>detect</button>
				</div>
			</div>
		</div>
    );
	}
export default ImageLinkForm;