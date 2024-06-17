import './Header.css';
import useStore from '../Main/Store';
import { useState } from 'react';

function Header() {
  const [inputValue, setInputValue] = useState("");
  const setUserName = useStore((state) => state.setUserName);
  const fetchProfileInfo = useStore((state) => state.fetchProfileInfo);
  const fetchRepo = useStore((state) => state.fetchRepo);
  const fetchFollowers = useStore.getState().fetchFollowers;

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setUserName(inputValue);
    fetchProfileInfo(inputValue);
    fetchRepo(inputValue);
    fetchFollowers(inputValue);

  };

  return (

    <header className="main-header">
      <div className="main-heading">
        <h1>Github Finder</h1>
      </div>
      <div className="github-account">
        <a href="https://github.com/njugus" style={{ color: 'lightgray' }}>By Kelvin Njuguna</a>
      </div>
      <div className="input-div">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter a username"
          style={{ width: '200px', height: '26px', padding: '10px' }}
        />
        <button
          type="submit"
          onClick={handleClick}
          style={{ width: '80px', height: '50px', padding: '10px', borderRadius: '5px' }}
        >
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
