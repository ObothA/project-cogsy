import React from 'react';
import { render, screen } from '@testing-library/react';

import Thumbail from './Thumbail';

import thumbnailImg from '../../../assets/img/pexels-jopwell-small.jpg';
import mainAsset from '../../../assets/img/pexels-jopwell-original.jpg';

describe('Thumbnail renders correctly.', () => {
  test('With props.', () => {
    render(<Thumbail thumbnailLink={thumbnailImg} assetLink={mainAsset} />);
    const thumbnailContainer = screen.getByTestId('thumbnail');
    expect(thumbnailContainer).toBeInTheDocument();

    const assetLink = screen.getByRole('link');
    expect(assetLink).toBeInTheDocument();

    const thumbnailImage = screen.getByRole('img');
    expect(thumbnailImage).toBeInTheDocument();
  });

  test('Without props.', () => {
    render(<Thumbail />);
    const thumbnailContainer = screen.getByTestId('thumbnail');
    expect(thumbnailContainer).toBeInTheDocument();

    const assetLink = screen.queryByRole('link');
    expect(assetLink).not.toBeInTheDocument();

    const thumbnailImage = screen.queryByRole('img');
    expect(thumbnailImage).not.toBeInTheDocument();
  });

  test('With only assetLink prop.', () => {
    render(<Thumbail assetLink={mainAsset} />);
    const thumbnailContainer = screen.getByTestId('thumbnail');
    expect(thumbnailContainer).toBeInTheDocument();

    const assetLink = screen.queryByRole('link');
    expect(assetLink).not.toBeInTheDocument();

    const thumbnailImage = screen.queryByRole('img');
    expect(thumbnailImage).not.toBeInTheDocument();
  });

  test('With only thumbnailLink prop.', () => {
    render(<Thumbail thumbnailLink={thumbnailImg} />);
    const thumbnailContainer = screen.getByTestId('thumbnail');
    expect(thumbnailContainer).toBeInTheDocument();

    const assetLink = screen.queryByRole('link');
    expect(assetLink).not.toBeInTheDocument();

    const thumbnailImage = screen.queryByRole('img');
    expect(thumbnailImage).not.toBeInTheDocument();
  });
});
