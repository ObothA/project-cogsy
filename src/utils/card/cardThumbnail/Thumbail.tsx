import React from 'react';

import thumbnailImg from '../../../assets/img/pexels-jopwell-small.jpg';
import mainAsset from '../../../assets/img/pexels-jopwell-original.jpg';

export default function Thumbail() {
  return (
    <div data-testid='thumbnail'>
      <a href={mainAsset} rel='noreferrer' target='_blank'>
        <img src={thumbnailImg} alt='thumbnail' className='img-fluid' />
      </a>
    </div>
  );
}
