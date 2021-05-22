import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    const fetchData = async () => {
      const fetchedData = await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          throw new Error('Error fetching data');
        });
      if (isMounted) setData(fetchedData);
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
