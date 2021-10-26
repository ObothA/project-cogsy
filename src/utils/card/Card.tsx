import React from 'react';

import Thumbail from './cardThumbnail/Thumbail';
import CardBody from './cardBody/CardBody';

import './card.css';

type cardProps = {
  heading: string;
  subHeading: string;
  thumbnailLink?: string;
  assetLink?: string;
  description?: string;
  favourite: boolean;
  menu: boolean;
  randomMenuIdentifier: string;
  defaultActive?: boolean;
};

export default function Card(props: cardProps) {
  return (
    <article className='article-card col-xs-12 col-sm-5 col-md-4 col-lg-4 col-xl-3 col-xxl-2'>
      <Thumbail
        thumbnailLink={props?.thumbnailLink}
        assetLink={props?.assetLink}
      />
      <CardBody {...props} />
    </article>
  );
}
