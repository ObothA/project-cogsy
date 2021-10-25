import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import './favourite.css';

export default function Favourite() {
  const [active, setActive] = useState(false);

  return (
    <div data-testid='favourite' className='col'>
      <IconContext.Provider value={{ color: '#2a2941', size: '18px' }}>
        <span
          className={`icon-container star-active-${active}`}
          onClick={() => setActive(!active)}
          data-testid='star-icon-span'
        >
          {active ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      </IconContext.Provider>
    </div>
  );
}
