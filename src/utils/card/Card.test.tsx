import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './Card';

test('Card renders correctly.', () => {
  render(
    <Card
      heading={'Important Announcement'}
      subHeading={'Last edited 6 days ago'}
      randomMenuIdentifier={'id-card-4767578983'}
      menu={true}
      favourite={true}
    />
  );
  const cardArticle = screen.getByRole('article');

  expect(cardArticle).toHaveClass(
    'article-card col-xs-12 col-sm-5 col-md-4 col-lg-4 col-xl-3 col-xxl-2'
  );
});
