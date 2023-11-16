// 'Searchbar.js'

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { words } from '@/lib/data';

const Searchbar = ({ onSearch }) => {
  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm === '') {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(words.filter((w) => w.includes(searchTerm)).slice(0, 8));
  };

  const handleSelect = (searchTerm) => {
    onSearch(searchTerm);
    setActiveSearch([]);
  };

  return (
    <form className='w-[500px] relative'>
      <div className='relative'>
        <input
          type='search'
          placeholder='Type Here'
          className='w-full p-4 rounded-full bg-slate-800'
          onChange={(e) => handleSearch(e)}
        />
        <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-600 rounded-full'>
          <AiOutlineSearch />
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div className='absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2'>
          {activeSearch.map((s, index) => (
            <span key={index} onClick={() => handleSelect(s)}>
              {s}
            </span>
          ))}
        </div>
      )}
    </form>
  );
};

export default Searchbar;
