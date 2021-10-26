import React from 'react';

type thumbnailProps = {
  thumbnailLink?: string;
  assetLink?: string;
};
export default function Thumbail({ thumbnailLink, assetLink }: thumbnailProps) {
  if (thumbnailLink && assetLink) {
    return (
      <div data-testid='thumbnail'>
        <a href={assetLink} rel='noreferrer' target='_blank'>
          <img src={thumbnailLink} alt='thumbnail' className='img-fluid' />
        </a>
      </div>
    );
  }
  return <div data-testid='thumbnail' />;
}
