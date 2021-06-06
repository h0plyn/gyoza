import { useState, useEffect } from 'react';

export interface Debounce {
  value: string;
  wait: number;
}

export default function useDebounce(value: string, wait: number = 500) {
  const [debouncedQuery, setDebouncedQuery] = useState<string>(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedQuery(value), wait);
    return () => clearTimeout(id);
  }, [value, wait]);

  return debouncedQuery;
}
