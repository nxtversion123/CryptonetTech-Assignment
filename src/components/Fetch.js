import React, { useEffect, useState } from "react";
import Card from "./Card";
import Spinner from "./Spinner";

const Fetch = () => {
  const [data, setData] = useState({
    picture: "",
    name: "",
    first: "",
    last: "",
    gender: "",
    Phone: "",
  });
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    const apiUrl = " https://randomuser.me/api/?page=1&results=1&seed=abc";
    // calling API to Fetch Data
    try {
      <Spinner />;
      const request = await fetch(apiUrl);
      // parsing JSON data
      const response = await request.json();
      console.log(response);
      //   setting fetched data to the state
      setData(response.results[0]);
      setLoading(false);
    } catch (error) {
      console.log("Error While Fetching response :", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    // dataprp is props of data sending to Card.js
    <div>
      <h2
        className="text-center"
        style={{ margin: "40px", fontSize: "xxx-large", fontWeight: "600" }}
      >CryptoNet Technologies - Assignment</h2>
      {loading && <Spinner />}
      <Card loader={<Spinner />} dataprp={data} loadprp={loading} />
    </div>
  );
};

export default Fetch;
