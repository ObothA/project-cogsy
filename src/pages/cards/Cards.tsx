import React from 'react';

import Card from '../../utils/card/Card';

import './cards.css';

export default function Cards() {
  return (
    <section data-testid='cards-section' className='cards-container p-5'>
      <section className='row'>
        <Card
          heading={'Important Announcement'}
          subHeading={'Last edited 6 days ago'}
          description={
            'A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video,images, subheadings, actions, and content.'
          }
          favourite={false}
          menu={false}
        />
      </section>
    </section>
  );
}
