import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const res = await makeRequest.get(url);
        setdata(res.data.data);
      } catch (err) {
        seterror(true);
      }
      setloading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;






