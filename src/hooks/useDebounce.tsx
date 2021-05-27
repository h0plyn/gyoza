import { useState, FC, useEffect } from 'react';

export interface Debounce {
  value: string;
  wait: number;
}

const useDebounce: FC<any> = ({ value, wait }: Debounce): any => {
  const [debouncedQuery, setDebouncedQuery] = useState<string>(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedQuery(value), wait);
    return () => clearTimeout(id);
  }, [value, wait]);

  return debouncedQuery;
};

export default useDebounce;
