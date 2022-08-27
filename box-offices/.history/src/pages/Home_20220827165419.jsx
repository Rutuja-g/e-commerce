import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onInputChange = ev => {
    setInput(ev.target.value);
    // console.log(ev.target.value);
  };
  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        setResults(result);
        console.log(result);
      });
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
    // console.log(ev.keyCode);
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
}

export default Home;
