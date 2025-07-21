import { useState } from "react";

export function useDelete(url) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: "DELETE",
      });
      const json = await res.json();
      setResponse(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, response, loading, error };
}

/***
 * 
 * import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function useDelete(url: string, redirectTo = '') {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const execute = async () => {
    setLoading(true);
    try {
      const res = await axios.delete(url);
      if (res.status === 200 || res.status === 204) {
        if (redirectTo) navigate(redirectTo);
        return true;
      } else {
        setError('Delete failed');
        return false;
      }
    } catch (e: any) {
      setError(e.response?.data?.message || e.message || 'Error deleting.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, execute };
}


uses

const { execute: deleteUser, loading, error } =
  useDelete('/api/users/123', '/users');

async function onDelete() {
  const ok = await deleteUser();
  if (ok) console.log('User removed');
}

 */