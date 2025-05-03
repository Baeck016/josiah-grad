import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import "./flipcard.css";

const FlipCard = () => {
  const Card = (frontimage, backimage) => {
    return (
      <Box p={4}>
        <Box className="flip-card" mx="auto">
          <Box className="flip-card-inner">
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

  return (
    <VStack
      id="main-container"
      bgColor="#ee252c"
      alignItems="center"
      justifyContent="center"
      gap="4"
    >
      {Card("images/front-page.png", "images/back-page.png")}
      {Card("images/4.png", "images/5.png")}
      {Card("images/6.png", "images/7.png")}
      {Card("images/8.png", "images/9.png")}
      {Card("images/10.png", "images/11.png")}
      {Card("images/12.png", "images/13.png")}
      {Card("images/14.png", "images/15.png")}
      {Card("images/16.png", "images/17.png")}
      {Card("images/18.png", "images/19.png")}
      {Card("images/20.png", "images/21.png")}
      {Card("images/22.png", "images/23.png")}
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
