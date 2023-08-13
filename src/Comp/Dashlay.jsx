import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import SideDrawer from "./SIdedrawer";


const Dashlay = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
// useDisclosure hook hai
  return (
    <Flex>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Sidenav />
      </Box>
      <Box flexGrow={1}>
        <Topnav title={title}  onOpen={onOpen}  />
        <Container
          overflowX="hidden"
          overflowY="auto"
          h="calc(100vh - 88px)"
          mt="6"
          maxW="70rem"
          padding="15px"
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default Dashlay;