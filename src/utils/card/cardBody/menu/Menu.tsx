import React, { useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { Popover, PopoverBody } from 'reactstrap';

import './menu.css';

export default function Menu() {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div className={`col menu-container`} data-testid='menu-container'>
      <IconContext.Provider
        value={{ color: popoverOpen ? 'white' : '#2a2941' }}
      >
        <span
          className={`p-1 menu-active-${popoverOpen}`}
          id='popoverMenuTrigger'
        >
          <HiOutlineDotsVertical />
        </span>
      </IconContext.Provider>
      <Popover
        placement='bottom-end'
        isOpen={popoverOpen}
        target='popoverMenuTrigger'
        toggle={toggle}
        trigger='hover'
      >
        <PopoverBody>Sed posuere consectetur</PopoverBody>
      </Popover>
    </div>
  );
}
