import React from "react";

import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";

import { VscSearch } from "react-icons/vsc";

import "../styles.css";

const Search = ({
  searchInput,
  setSearchInput,
  setSearchingFor,
  fetchGifs,
}) => {
  //checks theres is an input before runing
  const handleClick = () => {
    if (searchInput.length > 0) {
      setSearchingFor(searchInput);
      fetchGifs();
    }
    return;
  };
  return (
    <>
      <InputGroup>
        <Input
          h="52px"
          type="search"
          bg="white"
          color="black"
          placeholder="Search all of the GIFs"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <InputRightAddon
          className="shimmer"
          h="52px"
          fontSize="25px"
          cursor="pointer"
          children={<VscSearch />}
          onClick={handleClick}
        />
      </InputGroup>
    </>
  );
};

export default Search;
