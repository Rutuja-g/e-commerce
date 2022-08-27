import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

function Home() {
  const [input, setInput] = useState('');
  const onInputChange = ev => {};
  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} />
    </MainPageLayout>
  );
}

export default Home;
