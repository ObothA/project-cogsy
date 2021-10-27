import React from 'react';

import Card from '../../utils/card/Card';

import thumbnailImage from '../../assets/img/pexels-jopwell-small.jpg';
import imageFile from '../../assets/img/pexels-jopwell-original.jpg';
import videoThumbnail from '../../assets/video/2021-10-26_10-40.png';
import videoFile from '../../assets/video/pexels-anna-shvets.mp4';
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

        <Card
          {...generalProps}
          randomMenuIdentifier={'id-card-4'}
          description={''}
          menu={true}
          favourite={true}
          thumbnailLink={thumbnailImage}
          assetLink={imageFile}
          heading={'Countdown Announcement - Unleashing the power of cards'}
          subHeading={'Last edited 2 days ago'}
        />

        <Card
          {...generalProps}
          randomMenuIdentifier={'id-card-5'}
          description={''}
          menu={true}
          favourite={true}
          thumbnailLink={videoThumbnail}
          assetLink={videoFile}
          heading={'Sample video thumbnail'}
          subHeading={'Last edited 2 days ago'}
        />
      </section>
    </section>
  );
}
