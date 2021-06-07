import { useState, useEffect } from 'react';

export default function useDebounce(value: string, wait: number = 500) {
  const [debouncedQuery, setDebouncedQuery] = useState<string>(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedQuery(value), wait);
    return () => clearTimeout(id);
  }, [value, wait]);

  return debouncedQuery;
}
