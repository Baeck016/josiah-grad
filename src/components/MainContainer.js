import React from "react";
import { chakra } from "@chakra-ui/react";

import FlipCard from "./FlipCard";

const MainContainer = () => {
  return (
    <chakra.main
      minH="100%"
      minW="100%"
      flex={1}
      id="main-container"
      bgColor="#ee252c"
    >
      <FlipCard />
    </chakra.main>
  );
};

export default MainContainer;
