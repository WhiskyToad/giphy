import React from "react";

import {
  HStack,
  Image,
  Button,
  Text,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import { HiDotsVertical } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";

import logo from "../Images/logo.png";

const Links = () => (
  <HStack
    w="100%"
    h="70px"
    pt="10px"
    justify="space-between"
    display={{ base: "none", lg: "flex" }}
  >
    <HStack w="164px" h="35px">
      <Image src={logo} alt="Giphy logo" />
    </HStack>

    <UnorderedList>
      <ListItem>Reactions</ListItem>
      <ListItem>Entertainment</ListItem>
      <ListItem>Sport</ListItem>
      <ListItem>Stickers</ListItem>
      <ListItem>Artists</ListItem>
      <ListItem>
        <HiDotsVertical fontSize="18px" alt="more" />
      </ListItem>
    </UnorderedList>

    <Button variant="create" label="upload">
      Upload
    </Button>
    <Button variant="create" label="create">
      Create
    </Button>
    <Button variant="log-in" label="login">
      <HStack w="100%" h="100%" justify="flex-start">
        <Flex h="100%" w="36px" bg="grey" justify="center" align="center">
          <BsPersonFill />
        </Flex>
        <Text>Log In</Text>
      </HStack>
    </Button>
  </HStack>
);

export default Links;
