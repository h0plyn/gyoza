import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      const fetchedData = await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });

      if (isMounted) setData(fetchedData);
      console.log(data);
    }

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url, data]);

  return { data };
};

export default useFetch;
