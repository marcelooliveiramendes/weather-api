import React from 'react';
import picture from '../../img/picture.svg'
import './style.css'
// import { Container } from './styles';

function InitialContent() {
  return (
    <div className='initialContent'>
        <h1>Weather API</h1>
        <img src={picture} alt='img' />
    </div>
  )
}

export default InitialContent;