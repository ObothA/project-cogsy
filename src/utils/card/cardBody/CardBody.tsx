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
      <section data-testid='description' className='description'>
        A card is a flexible and extensible content container. It includes a
        wide variety of content, thumbnails, video,images, subheadings, actions,
        and content.
      </section>
      <section data-testid='card-actions' className='row mt-4'>
        <div className='col'>Col A</div>
        <div className='col menu-container'>Col B</div>
      </section>
    </section>
  );
}
