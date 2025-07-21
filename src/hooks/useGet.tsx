import { useState, useEffect } from "react";

export function useGet(url) {
  const [data, setData] = useState(null);        // Step 1: Store fetched data
  const [loading, setLoading] = useState(true);  // Step 2: Loading status
  const [error, setError] = useState(null);      // Step 3: Error tracking

  useEffect(() => {
    console.log("useGet triggered for:", url);

    const fetchData = async () => {
      setLoading(true);
      console.log("Sending GET request to:", url);

      try {
        const res = await fetch(url);            // Step 4: API call
        console.log("Response received:", res);

        const json = await res.json();           // Step 5: Convert to JSON
        console.log("Parsed JSON data:", json);

        setData(json);                           // Step 6: Save data to state
      } catch (err) {
        console.error("rror while fetching:", err);
        setError(err);                           // Step 7: Save error
      } finally {
        setLoading(false);                       // Step 8: Mark loading done
        console.log("Done. Loading set to false.");
      }
    };

    fetchData();
  }, [url]); // Runs on mount or when `url` changes

  return { data, loading, error }; // Step 9: Return values for component
}



/**************************************
 * 
 * import { useState, useEffect } from 'react';
import axios from 'axios';

function useGet<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get<T>(url);
      setData(res.data);
      setError('');
    } catch (e: any) {
      setError(e.response?.data?.message || e.message || 'Error fetching.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading, refetch: fetchData };
}


Uses

const { data, error, loading, refetch } = useGet<User[]>('/api/users');
// Use `data`, show loading/error, refresh data via refetch()

 */

/**
 * 
 */