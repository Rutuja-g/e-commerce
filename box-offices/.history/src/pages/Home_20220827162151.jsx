import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState('');
  const onInputChange = ev => {
    setInput(ev.target.value);
    // console.log(ev.target.value);
  };
  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} value={input} />{' '}
      {/*Input element will have its internal state */}
    </MainPageLayout>
  );
}

export default Home;
