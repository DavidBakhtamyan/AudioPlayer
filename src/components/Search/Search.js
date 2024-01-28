import React from 'react';
import "./Search.css";
import { useDispatch, useSelector } from 'react-redux';
import { handleFilter } from '../../store/slices/filterSlice/filterSlice';
const Search = () => {
    const inputValue = useSelector(store => store.filter)
    const dispatch = useDispatch()
    const handleInput = (e) => {
        dispatch(handleFilter(e.target.value))
    }
    return (
        <div className='Search'>
            <i className="fas fa-search searchIcon"></i>
            <input className='searchInput' type="text" placeholder='Filter' value={inputValue} onChange={(e) => handleInput(e)}/>
        </div>
    );
}

export default Search;
