import { useState } from "react";

export function usePut(url) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const putData = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setResponse(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { putData, response, loading, error };
}


/***
 * import { useState } from 'react';
import axios from 'axios';

function usePut<TReq, TRes>(url: string) {
  const [data, setData] = useState<TRes | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const execute = async (body: TReq) => {
    setLoading(true);
    try {
      const res = await axios.put<TRes>(url, body);
      setData(res.data);
      setError('');
      return res.data;
    } catch (e: any) {
      setError(e.response?.data?.message || e.message || 'Error updating.');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, execute };
}


uses
const { execute: updateUser, data: updated, loading, error } =
  usePut<Partial<User>, User>('/api/users/123');

async function onSave(updatedFields) {
  const res = await updateUser(updatedFields);
  if (res) alert('Saved!');
}

 */