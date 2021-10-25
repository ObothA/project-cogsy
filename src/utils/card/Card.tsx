import React from 'react';

import Thumbail from './cardThumbnail/Thumbail';
import CardBody from './cardBody/CardBody';

import './card.css';

export default function Card() {
  return (
    <article className='article-card col'>
      <Thumbail />
      <CardBody />
    </article>
  );
}
