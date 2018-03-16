import React from 'react';


const Screen = ({handleChange}) => {
	return (
			 <input type='text' className='input' value={handleChange()}/>
	);
}


export default Screen;
