import React, { useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import "./flipcard.css";

const Card = ({ frontimage, backimage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box p={4} onClick={handleFlip}>
      <Box className="flip-card" mx="auto">
        <Box className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
          <Box className="flip-card-front">
            <Box
              bgImage={`url(${process.env.PUBLIC_URL + frontimage})`}
              bgSize="cover"
              width="100%"
              height="100%"
            />
          </Box>
          <Box
            className="flip-card-back"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              bgImage={`url(${process.env.PUBLIC_URL + backimage})`}
              bgSize="cover"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const FlipCard = () => {
  return (
    <VStack
      id="main-container"
      bgColor="#ee252c"
      alignItems="center"
      justifyContent="center"
      gap="4"
    >
      <Card
        frontimage="images/front-page.png"
        backimage="images/back-page.png"
      />
      <Card frontimage="images/4.png" backimage="images/5.png" />
      <Card frontimage="images/6.png" backimage="images/7.png" />
      <Card frontimage="images/8.png" backimage="images/9.png" />
      <Card frontimage="images/10.png" backimage="images/11.png" />
      <Card frontimage="images/12.png" backimage="images/13.png" />
      <Card frontimage="images/14.png" backimage="images/15.png" />
      <Card frontimage="images/16.png" backimage="images/17.png" />
      <Card frontimage="images/18.png" backimage="images/19.png" />
      <Card frontimage="images/20.png" backimage="images/21.png" />
      <Card frontimage="images/22.png" backimage="images/23.png" />
      <Text
        textColor="white"
        textAlign="center"
        fontWeight="bold"
        fontSize="1.5rem"
      >
        PLEASE TITHE! <br />
        DON'T GAMBLE IT'S NOT WORTH IT
      </Text>
    </VStack>
  );
};

export default FlipCard;
