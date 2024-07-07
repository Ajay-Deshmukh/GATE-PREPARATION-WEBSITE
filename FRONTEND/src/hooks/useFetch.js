// import { useState, useEffect } from "react";

// const useFetch = (initialUrl, onSuccess = null) => {
//   const [url, setUrl] = useState(initialUrl);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const abortController = new AbortController();

//     const fetchData = async () => {
//       setIsLoading(true);
//       if (!url) return;
//       try {
//         const response = await fetch(url, { signal: abortController.signal });
//         if (!response.ok) {
//           setError("Failed to fetch data");
//           setData(null);
//         } else {
//           const result = await response.json();
//           if (onSuccess) {
//             onSuccess(result);
//           }
//           setData(result);
//           setError(null);
//         }
//       } catch (error) {
//         if (error.name === "AbortError") {
//           console.log("Fetch aborted");
//         } else {
//           setError(error.message);
//           setData(null);
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();

//     return () => {
//       abortController.abort();
//     };
//   }, [url]);

//   return { data, error, isLoading, setUrl };
// };

// export default useFetch;
// useFetch.js

import { useState, useEffect } from 'react';

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};


