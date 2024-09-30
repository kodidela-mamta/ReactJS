import React, { useEffect } from "react";

function DataFetching() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const promise = fetch("api-endpoint");
    const fetchedData = promise.then((response) => {});
  };

  return <span>Data Fetching Example</span>;
}
export default DataFetching;
