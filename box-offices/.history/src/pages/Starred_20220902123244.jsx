import React from 'react';
import MainPageLayout from '../components/MainPageLayout';

function Starred() {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  return <MainPageLayout>This is Starred</MainPageLayout>;
}

export default Starred;
