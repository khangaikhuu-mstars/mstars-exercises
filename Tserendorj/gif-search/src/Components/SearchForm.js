import React, { useState } from 'react';

function SearchForm(props) {
  const [search, setSearch] = useState('');
  
  const onSearchChange = (e) => { 
    // Update state 
    setSearch(e.target.value);
    console.log(e.target)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(search)
    e.currentTarget.reset();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">Search</label>
      <input type="search"
        onChange={onSearchChange}
        name="search"
        placeholder="Search..."
      />
      <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
    </form>
  );
}

export default SearchForm;