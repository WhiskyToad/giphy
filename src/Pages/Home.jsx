/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { Spinner } from "@chakra-ui/react";

import Links from "../Components/Links";
import MobileLinks from "../Components/MobileLinks";
import Search from "../Components/Search";
import Banner from "../Components/Banner";
import Gifs from "../Components/Gifs";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchingFor, setSearchingFor] = useState("");
  const [gifs, setGifs] = useState([]);

  //fetches the gifs
  const fetchGifs = async () => {
    let url =
      "https://api.giphy.com/v1/gifs/trending?api_key=w2CbMtpfbdN6U3T22ikUUPHvp0Qw4Nl2";
    //switch if searching
    if (searchingFor.length > 0) {
      url = `https://api.giphy.com/v1/gifs/search?api_key=w2CbMtpfbdN6U3T22ikUUPHvp0Qw4Nl2&q=${searchingFor}`;
    }
    try {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      setGifs(data.data);
      console.log(gifs);
    } catch (error) {
      console.log(error);
    }
  };

  // fires data fetch on load and search
  useEffect(() => {
    fetchGifs();
  }, [searchingFor]);

  return (
    <>
      <Links />
      <MobileLinks />
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearchingFor={setSearchingFor}
        fetchGifs={fetchGifs}
      />
      <Banner />
      {gifs.length === 0 ? (
        <Spinner size="lg" />
      ) : (
        <Gifs
          gifs={gifs}
          searchingFor={searchingFor}
          setSearchingFor={setSearchingFor}
        />
      )}
    </>
  );
};

export default Home;
