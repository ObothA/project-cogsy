import React from 'react';

import Card from '../../utils/card/Card';

import './cards.css';

export default function Cards() {
  const generalProps = {
    heading: 'Important announcement',
    subHeading: 'Last edited 6 days ago',
    description:
      'A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video,images, subheadings, actions, and content.',
    favourite: false,
    menu: false,
  };

  return (
    <section data-testid='cards-section' className='cards-container p-5'>
      <section className='row'>
        <Card
          {...generalProps}
          description={''}
          subHeading={'Last edited 1 week ago'}
          randomMenuIdentifier={'id-card-1'}
        />

        <Card
          {...generalProps}
          description={''}
          subHeading={'Last edited 4 hours ago'}
          menu={true}
          randomMenuIdentifier={'id-card-2'}
        />

        <Card
          {...generalProps}
          heading={'Important announcement'}
          subHeading={'Last edited 2 days ago'}
          menu={true}
          favourite={true}
          defaultActive={true}
          randomMenuIdentifier={'id-card-3'}
        />
      </section>
    </section>
  );
}
