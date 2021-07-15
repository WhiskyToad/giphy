import React, { useState } from "react";

import {
  Button,
  Grid,
  HStack,
  VStack,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { HiOutlineTrendingUp } from "react-icons/hi";

import "../styles.css";

const Gifs = ({ gifs, searchingFor, setSearchingFor }) => {
  const [loadMore, setLoadMore] = useState(false);

  const GifDisplay = ({ gif, index }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log(gif);
    return (
      <>
        <Image
          h="200px"
          w="200px"
          borderRadius="5px"
          objectFit="cover"
          cursor="pointer"
          key={index}
          src={gif.images.preview_webp.url}
          alt={gif.title}
          onClick={onOpen}
          display={index > 24 && loadMore === false ? "none" : null}
        />

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="black">{gif.title}</ModalHeader>
            <ModalCloseButton color="black" />
            <ModalBody>
              <Image src={gif.images.original.url} />
            </ModalBody>

            <ModalFooter>
              <Button id="shimmer" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <VStack w="100%">
      <HStack w="100%">
        {searchingFor.length > 0 ? (
          <HStack w="100%" justify="space-between">
            <Button
              variant="create"
              label="back"
              onClick={() => setSearchingFor("")}
            >
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

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gridGap="10px"
      >
        {gifs.map((gif, index) => (
          <GifDisplay gif={gif} index={index} key={index} />
        ))}
      </Grid>

      <Button
        variant="create"
        label="Show or Hide more"
        onClick={() => setLoadMore(!loadMore)}
      >
        <Text>Show {loadMore ? "Less" : "More"}</Text>
      </Button>
    </VStack>
  );
};

export default Gifs;
