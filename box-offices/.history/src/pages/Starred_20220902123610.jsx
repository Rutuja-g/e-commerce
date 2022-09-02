import React, { useEffect } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';

function Starred() {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => apiGet());
      // Promise.all()
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return <MainPageLayout>This is Starred</MainPageLayout>;
}

export default Starred;
