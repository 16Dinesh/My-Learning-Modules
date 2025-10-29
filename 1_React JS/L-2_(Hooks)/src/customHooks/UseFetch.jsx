import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController(); // cancel fetch on unmount
    setLoading(true);

    fetch(url, { signal: abortController.signal })
      .then(response => {
        if (!response.ok) throw new Error('Fetch error');
        return response.json();
      })
      .then(data => setData(data))
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

    return () => abortController.abort(); // cleanup on unmount
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
