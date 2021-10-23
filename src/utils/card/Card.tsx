import React from 'react';

import Thumbail from './cardThumbnail/Thumbail';

import './card.css';

export default function Card() {
  return (
    <article className='article-card col'>
      <Thumbail />
    </article>
  );
}
