import React from 'react';

import './cardBody.css';

export default function CardBody() {
  return (
    <section data-testid='card-body' className='p-3'>
      <header data-testid='card-header'>
        <h6 data-testid='main-heading' className='heading'>
          Important Announcement
        </h6>
        <h4 data-testid='sub-heading' className='sub-heading'>
          Last edited 6 days ago
        </h4>
      </header>
      <section></section>
      <section></section>
    </section>
  );
}
