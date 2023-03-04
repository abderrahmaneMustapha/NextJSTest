import { useState, useEffect } from "react";
import { apiUrl } from "../utils/config";

const useUsers= () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await fetch(apiUrl + "" + "/users")
      const data = await res.json();
      setData(data);
      setLoading(false)
    }

    fetchData().catch((e) => {
      setError(e)
      setLoading(false)
    })

  }, []);

  return {
    data,
    loading,
    error,
  };
};

export { useUsers }