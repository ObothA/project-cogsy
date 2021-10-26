import React, { useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { Popover, PopoverBody } from 'reactstrap';

import './menu.css';

type menuProps = {
  menu: boolean;
};

export default function Menu({ menu }: menuProps) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div className={`col menu-container`} data-testid='menu-container'>
      {menu && (
        <>
          <IconContext.Provider
            value={{ color: popoverOpen ? 'white' : '#2a2941' }}
          >
            <span
              className={`p-1 menu-active-${popoverOpen}`}
              id='popoverMenuTrigger'
              data-testid='popoverTrigger'
            >
              <HiOutlineDotsVertical />
            </span>
          </IconContext.Provider>
          <Popover
            placement='bottom-end'
            isOpen={popoverOpen}
            target='popoverMenuTrigger'
            toggle={toggle}
            trigger='click'
          >
            <PopoverBody>
              <div data-testid='dropdown-menu'>
                <div
                  data-testid='dropdown-menu-items'
                  className='dropdown-menu-item'
                >
                  Save
                </div>
                <div
                  data-testid='dropdown-menu-items'
                  className='dropdown-menu-item'
                >
                  Edit
                </div>
                <div
                  data-testid='dropdown-menu-items'
                  className='dropdown-menu-item'
                >
                  Preview
                </div>
              </div>
            </PopoverBody>
          </Popover>
        </>
      )}
    </div>
  );
}
