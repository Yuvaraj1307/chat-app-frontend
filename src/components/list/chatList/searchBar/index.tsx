import { FC } from 'react';

import './style.css';

const SearchBar: FC<TSeachBarComponent> = (props) => {

  const { addMode, setAddMode } = props;

  return (
    <div className="search">
      <div className="searchBar">
        <img src="/search.png" alt="search" />
        <input type="text" placeholder='Search' />
      </div>
      <img
        src={addMode ? '/minus.png' : '/plus.png'}
        alt="plus"
        className='add'
        onClick={() => setAddMode((prev) => !prev)}
      />
    </div>
  );
};

export default SearchBar;
