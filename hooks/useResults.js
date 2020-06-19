import React, { useState, useEffect } from "react";
import yelp from "../API/yelp";
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const SearchApi = async (searchTerm) => {
    console.log("Hi There");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Somethink went Wrong");
    }
  };
  useEffect(() => {
    SearchApi("Pasta");
  }, []);
  return [SearchApi, results, errorMessage];
};
