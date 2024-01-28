import React from 'react';
import "./Navbar.css" 
import PlayAllButton from '../PlayAllButton/PlayAllButton';
import AddAllButton from '../AddAllButton/AddAllButton';
import Sort from '../Sort/Sort';
import Search from '../Search/Search';
const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className='Btns'>
                <PlayAllButton />
                <AddAllButton/>
            </div>
           <div className='filtres'>
            <Sort />
            <Search />
           </div>
        </nav>
    );
}

export default Navbar;
