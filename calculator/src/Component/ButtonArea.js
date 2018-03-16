import React from 'react';


const ButtonArea = ({ handleClear,handleDelete, onButtonClick, handleResult}) => {
	return (
	<div className="Button">
      <button className='ButtonArea' onClick={onButtonClick} value='+'>+</button>
      <button className='ButtonArea' onClick={onButtonClick} value='-'>-</button>
      <button className='ButtonArea' onClick={onButtonClick} value='*'>*</button>
      <button className='ButtonArea' onClick={onButtonClick} value='/'>/</button>
      <button className='ButtonArea' onClick={onButtonClick} value='7'>7</button>
      <button className='ButtonArea' onClick={onButtonClick} value='8'>8</button>
      <button className='ButtonArea' onClick={onButtonClick} value='9'>9</button>
      <button className='ButtonArea' onClick={onButtonClick} value='%'>%</button>
      <button className='ButtonArea' onClick={onButtonClick} value='4'>4</button>
      <button className='ButtonArea' onClick={onButtonClick} value='5'>5</button>
      <button className='ButtonArea' onClick={onButtonClick} value='6'>6</button>
      <button className='ButtonArea' onClick={handleDelete}>⌫</button>
      <button className='ButtonArea' onClick={onButtonClick} value='1'>1</button>
      <button className='ButtonArea' onClick={onButtonClick} value='2'>2</button>
      <button className='ButtonArea' onClick={onButtonClick} value='3'>3</button>
      <button className='ButtonArea' onClick={onButtonClick} value ='-'>±</button>
      <button className='ButtonArea'onClick={handleClear}>AC</button>
      <button className='ButtonArea' onClick={onButtonClick} value='0'>0</button>
      <button className='ButtonArea' onClick={onButtonClick} value='.'>.</button>
      <button className='ButtonArea' onClick={handleResult}>=</button>
    </div>
	);
}


export default ButtonArea;
