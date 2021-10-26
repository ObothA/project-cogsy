import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import './favourite.css';

type FavouriteProps = {
  defaultActive?: boolean;
  favourite: boolean;
};

export default function Favourite({
  favourite,
  defaultActive = false,
}: FavouriteProps) {
  const [active, setActive] = useState(defaultActive);

  return (
    <div data-testid='favourite' className='col'>
      {favourite && (
        <IconContext.Provider value={{ color: '#2a2941', size: '18px' }}>
          <span
            className={`icon-container star-active-${active}`}
            onClick={() => setActive(!active)}
            data-testid='star-icon-span'
          >
            {active ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        </IconContext.Provider>
      )}
    </div>
  );
}
