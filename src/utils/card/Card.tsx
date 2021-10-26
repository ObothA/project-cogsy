import React from 'react';

import Thumbail from './cardThumbnail/Thumbail';
import CardBody from './cardBody/CardBody';

import './card.css';

export default function Card() {
  return (
    <article className='article-card col-xs-12 col-sm-5 col-md-4 col-lg-4 col-xl-3 col-xxl-2'>
      <Thumbail />
      <CardBody />
    </article>
  );
}
