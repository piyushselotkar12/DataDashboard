import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsMoon, BsSun } from 'react-icons/bs';

function Header({ OpenSidebar }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleLanguageChange = (event) => {
    console.log('Language selected:', event.target.value);
    // Implement language change logic here
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <div className='search-container'>
          <BsSearch className='icon' />
          <input type='text' placeholder='Search...' className='search-input' />
        </div>
      </div>
      <div className='header-right'>
        <div className='language-select'>
          <label htmlFor='language'>Translate:</label>
          <select id='language' onChange={handleLanguageChange}>
            <option value='english'>English</option>
            <option value='hindi'>Hindi</option>
            <option value='marathi'>Marathi</option>
          </select>
        </div>
        <div className='dark-light-mode' onClick={toggleDarkMode}>
          {darkMode ? <BsSun className='icon' /> : <BsMoon className='icon' />}
        </div>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  );
}

export default Header;
