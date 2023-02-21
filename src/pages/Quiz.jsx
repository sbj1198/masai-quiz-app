import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Quiz = () => {
  const questions = useSelector((store) => store.AppReducer.questions);
  const [next, setNext] = useState(false);
  const [curr, setCurr] = useState(1);
  const [prev, setPrev] = useState(false);
  const total = questions.length;

  // useEffect(() => {
  //   questions[curr]
  // }, [])

  return (
    <Box maxW="800px" margin="auto" mt="20px" bgColor="#6b5cd5" color="white">
      <Flex flexDirection="column" p="40px">
        <Box display="inline-flex" mb="20px">
          <Flex alignItems="center" flexWrap="wrap">
            <Heading as="h4" size="md">
              {questions[curr]?.question}
            </Heading>
          </Flex>
          <Spacer />
          <Text as="span">{`${curr} of ${total}`}</Text>
        </Box>
        <Button variant="outline" mb="10px" _hover={{ bgColor: "#5244bb" }}>
          {questions[curr]?.correct_answer}
        </Button>
        <Button variant="outline" mb="10px" _hover={{ bgColor: "#5244bb" }}>
          {questions[curr]?.incorrect_answers[0]}
        </Button>
        <Button variant="outline" mb="10px" _hover={{ bgColor: "#5244bb" }}>
          {questions[curr]?.incorrect_answers[1]}
        </Button>
        <Button variant="outline" _hover={{ bgColor: "#5244bb" }}>
          {questions[curr]?.incorrect_answers[2]}
        </Button>
      </Flex>
      <Flex justifyContent="center" pb="20px">
        <Button variant="outline" mr="10px" _hover={{ bgColor: "#5244bb" }}>
          NEXT
        </Button>
        <Button variant="outline" _hover={{ bgColor: "#5244bb" }}>
          PREVIOUS
        </Button>
      </Flex>
    </Box>
  );
};

// box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
