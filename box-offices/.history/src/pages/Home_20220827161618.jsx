import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState('');
  const onInputChange = ev => {
    console.log(ev);
  };
  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} />
    </MainPageLayout>
  );
}

export default Home;
