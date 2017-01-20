import React, {Component} from 'react';


const SearchBar = (props) =>{
  const onInputChange = (ev) => {
    props.onSearch(ev.target.value)
  }

  return (
    <div className='search-bar'>
      <input
        onChange={onInputChange}/>
    </div>
  )
}

export default SearchBar;
