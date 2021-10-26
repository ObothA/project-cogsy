import React from 'react';

import Favourite from './favourite/Favourite';
import Menu from './menu/Menu';

import './cardBody.css';

type cardBodyProps = {
  heading: string;
  subHeading: string;
  description?: string;
};

export default function CardBody({
  heading,
  subHeading,
  description,
}: cardBodyProps) {
  return (
    <section data-testid='card-body' className='p-3'>
      <header data-testid='card-header'>
        <h6 data-testid='main-heading' className='heading'>
          {heading}
        </h6>
        <h4 data-testid='sub-heading' className='sub-heading'>
          {subHeading}
        </h4>
      </header>
      {description && (
        <section data-testid='description' className='description'>
          {description}
        </section>
      )}
      <section data-testid='card-actions' className='row mt-4'>
        <Favourite />
        <Menu />
      </section>
    </section>
  );
}
