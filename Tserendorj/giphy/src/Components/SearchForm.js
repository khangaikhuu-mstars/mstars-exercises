import React, { useState } from 'react';

function SearchForm(props) {
  const [searchText, setSearchText] = useState('')
  
  const onSearchChange = (e) => { 
    // Update state 
    setSearchText(e.target.value)
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(searchText);
    e.currentTarget.reset();
  }
<<<<<<< HEAD:temuulen/gif-search/src/Components/SearchForm.js

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
=======
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={(input)=>this.query = input}
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
    );
  }
}
>>>>>>> 0f7121fa5b5049eb267631d8465034414fffa925:Tserendorj/giphy/src/Components/SearchForm.js
