import React, { useEffect, useRef, useState } from 'react';
import "./Sort.css";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSort } from '../../store/slices/sortSlice/sortSlice';

const Sort = () => {
  const [dropdownState, setDropdownState] = useState(false);
  const dropdownRef = useRef(null);
  const sortList = useSelector(state => state.sortList)
  const dispatch = useDispatch()

  const handleDropdown = () => {
    setDropdownState((prev) => !prev);
  };
  const handleSort = (id) => {
    dispatch(toggleSort(id))
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        handleDropdown()
      }
    };
    

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className='Sort'>
      <button className='SortBtn' onClick={handleDropdown}>
        <i className="fas fa-sort"></i> Sort by... <i className="fas fa-caret-down"></i>
      </button>
      {dropdownState && (
        <div className='sortDropdownContainer' ref={dropdownRef}>
          <div className='sortDropdownActive'>
            {
                sortList.map(({ id, name, isToggled }) => (
                    <span
                    className='sortSpan'
                      key={id}
                      onClick={() => handleSort(id)}
                    >
                    {
                        isToggled && <i className="fas fa-check"></i>
                    }
                      {name}
                    </span>
                  ))
                  
            }
          </div>
          <div className='dropdownTriangle'></div>
        </div>
      )}
    </div>
  );
};

export default Sort;
