import React, { useState } from "react";
import axios from "axios";

export default function usePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const post = async (url, apiData) => {
    try {
      setLoading(true);
      const { data: responseData } = await axios.post(url, apiData);
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(true); //saçma oldu
      setError(false);
    }
  };
  return { data, loading, error, post };
}
