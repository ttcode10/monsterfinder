import React from 'react';
import './search-box.styles.css';

const SearchBox = ({onSearchChange}) => (
  <input
    className='search-box'
    type='search'
    placeholder='Search monsters...'
    onChange={onSearchChange}
  ></input>
);

export default SearchBox;
