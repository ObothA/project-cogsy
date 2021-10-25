import React from 'react';

import Card from '../../utils/card/Card';

import './cards.css';

export default function Cards() {
  return (
    <section data-testid='cards-section' className='cards-container p-5'>
      <section className='row'>
        <Card />
      </section>
    </section>
  );
}
