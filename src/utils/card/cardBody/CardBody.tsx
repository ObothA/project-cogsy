import React from 'react';

import './cardBody.css';

export default function CardBody() {
  return (
    <section data-testid='card-body' className='p-3'>
      <header data-testid='card-header'>
        <h6 data-testid='main-heading' className='heading'>
          Important Announcement - Unl
        </h6>
      </header>
      <section></section>
      <section></section>
    </section>
  );
}
