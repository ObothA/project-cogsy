import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
// import { AiFillStar, AiOutlineStar } from 'react-icons/all';
import { IconContext } from 'react-icons';

export default function Favourite() {
  return (
    <div data-testid='favourite' className='col'>
      <IconContext.Provider value={{ color: '#2a2941', size: '17px' }}>
        <div>
          <AiOutlineStar />
        </div>
      </IconContext.Provider>
    </div>
  );
}
