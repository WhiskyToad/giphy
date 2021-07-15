import React, { useState } from "react";

import {
  Flex,
  HStack,
  Image,
  ListItem,
  Box,
  UnorderedList,
} from "@chakra-ui/react";

import { FaRegUser } from "react-icons/fa";
import { TiPlusOutline } from "react-icons/ti";
import logo from "../Images/logo.png";

const MobileLinks = () => {
  // toggle for mobile menu
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <HStack
      w="100%"
      h="70px"
      pt="10px"
      justify="space-between"
      display={{ base: "flex", lg: "none" }}
    >
      <HStack w="164px" h="35px">
        <Image src={logo} alt="Giphy logo" />
      </HStack>
      <HStack w="150px" justify="space-between">
        <TiPlusOutline color="#00ff99" fontSize="30px" />
        <FaRegUser color="yellow" fontSize="24px" />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        {/* <MenuLinks isOpen={isOpen} toggle={toggle} /> */}
      </HStack>
    </HStack>
  );
};

const CloseIcon = () => (
  <svg
    width="38px"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Close</title>
    <path
      fill="#56c9f2"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="38px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="#56c9f2"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      display={{ base: "block", lg: "none" }}
      onClick={toggle}
      align="center"
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Flex
      display={{ base: isOpen ? "flex" : "none", lg: "flex" }}
      flexBasis={{ base: "100%", lg: "auto" }}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <UnorderedList mx="auto">
        <ListItem>Reactions</ListItem>
        <ListItem>Entertainment</ListItem>
        <ListItem>Sport</ListItem>
        <ListItem>Stickers</ListItem>
        <ListItem>Artists</ListItem>
      </UnorderedList>
    </Flex>
  );
};

export default MobileLinks;
