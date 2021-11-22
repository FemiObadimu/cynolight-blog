import { useState, useEffect } from "react";

const useFetch = (url)  => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortControl = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortControl.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Sorry, Could not Load that Resouce");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setLoading(false);
            setError(err.message);
          }
        });
    }, 2000);

    return () => abortControl.abort();
  }, [url]);

  return { blogs, loading, error };
};

export default useFetch;
