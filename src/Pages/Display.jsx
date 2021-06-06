/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import {
  Flex,
  Button,
  Grid,
  HStack,
  VStack,
  List,
  ListItem,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { HiDotsVertical, HiOutlineTrendingUp } from "react-icons/hi";
import { VscSearch } from "react-icons/vsc";
import { BsPersonFill } from "react-icons/bs";

import logo from "../Images/logo.png";

const Display = () => {
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
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearchingFor={setSearchingFor}
        setGifs={setGifs}
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

// All the components are down here, if you wished to reuse just create a components folder and put them in there

// top row of nav
const Links = () => (
  <HStack w="100%" h="70px" pt="10px" justify="space-between">
    <HStack w="164px" h="35px">
      <Image src={logo} alt="Giphy logo" />
    </HStack>

    <List>
      <HStack>
        <ListItem>
          <Button variant="nav-links">Reactions</Button>
        </ListItem>
        <ListItem>
          <Button variant="nav-links">Entertainment</Button>
        </ListItem>
        <ListItem>
          <Button variant="nav-links">Sport</Button>
        </ListItem>
        <ListItem>
          <Button variant="nav-links">Stickers</Button>
        </ListItem>
        <ListItem>
          <Button variant="nav-links">Artists</Button>
        </ListItem>
        <ListItem>
          <Button variant="nav-links">
            <HiDotsVertical fontSize="18px" />
          </Button>
        </ListItem>
      </HStack>
    </List>

    <Button variant="create">Upload</Button>
    <Button variant="create">Create</Button>
    <Button variant="log-in">
      <HStack w="100%" h="100%" justify="flex-start">
        <Flex h="100%" w="36px" bg="grey" justify="center" align="center">
          <BsPersonFill />
        </Flex>
        <Text>Log In</Text>
      </HStack>
    </Button>
  </HStack>
);

// search bar
const Search = ({
  searchInput,
  setSearchInput,
  setSearchingFor,
  setGifs,
  fetchGifs,
}) => {
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
          h="52px"
          bg="blue"
          fontSize="25px"
          cursor="pointer"
          children={<VscSearch />}
          onClick={handleClick}
        />
      </InputGroup>
    </>
  );
};

//banner display
const Banner = () => (
  <>
    <Image
      src="https://media.giphy.com/headers/2021-05-21-22-1621610529/PRIDE_BANNER_HP_2021_v04.gif"
      alt="All of the Pride Month GIFs!"
    />
  </>
);

//displays the gifs
const Gifs = ({ gifs, searchingFor, setSearchingFor }) => {
  const [loadMore, setLoadMore] = useState(false);

  return (
    <VStack w="100%">
      <HStack w="100%">
        {searchingFor.length > 0 ? (
          <HStack w="100%" justify="space-between">
            <Button variant="create" onClick={() => setSearchingFor("")}>
              Back
            </Button>
            <h2>Showing results for: {searchingFor}</h2>
          </HStack>
        ) : (
          <>
            <HiOutlineTrendingUp color="blue" fontSize="36px" />
            <h2>Trending</h2>
          </>
        )}
      </HStack>

      <Grid templateColumns="repeat(5, 1fr)">
        {gifs.map((gif, index) => (
          <Image
            h="140px"
            my="10px"
            key={index}
            src={gif.images.preview_webp.url}
            alt={gif.title}
            display={index > 24 && loadMore === false ? "none" : null}
          />
        ))}
      </Grid>

      <Button variant="create" onClick={() => setLoadMore(!loadMore)}>
        <Text>Show {loadMore ? "Less" : "More"}</Text>
      </Button>
    </VStack>
  );
};

export default Display;
