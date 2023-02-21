import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Quiz = () => {
  const questions = useSelector((store) => store.AppReducer.questions);
  const [curr, setCurr] = useState(0);
  const total = questions.length;

  const nextHandler = () => {
    if (curr < total - 1) {
      setCurr(curr + 1);
    }
  };

  const submitHandler = () => {};

  const previousHandler = () => {
    if (curr > 0) {
      setCurr(curr - 1);
    }
  };

  return (
    <Box maxW="800px" margin="auto" mt="20px" bgColor="#6b5cd5" color="white">
      <Flex flexDirection="column" p="40px">
        <Box display="inline-flex" mb="20px">
          <Flex alignItems="center" flexWrap="wrap">
            <Heading as="h4" size="md">
              {decodeURIComponent(questions[curr]?.question)
                .split("+")
                .join(" ")}
            </Heading>
          </Flex>
          <Spacer />
          <Text as="span">{`${curr + 1} of ${total}`}</Text>
        </Box>
        <Button variant="outline" mb="10px" _hover={{ bgColor: "#5244bb" }}>
          {decodeURIComponent(questions[curr]?.correct_answer)
            .split("+")
            .join(" ")}
        </Button>
        <Button variant="outline" mb="10px" _hover={{ bgColor: "#5244bb" }}>
          {decodeURIComponent(questions[curr]?.incorrect_answers[0])
            .split("+")
            .join(" ")}
        </Button>
        <Button variant="outline" mb="10px" _hover={{ bgColor: "#5244bb" }}>
          {decodeURIComponent(questions[curr]?.incorrect_answers[1])
            .split("+")
            .join(" ")}
        </Button>
        <Button variant="outline" _hover={{ bgColor: "#5244bb" }}>
          {decodeURIComponent(questions[curr]?.incorrect_answers[2])
            .split("+")
            .join(" ")}
        </Button>
      </Flex>
      <Flex justifyContent="center" pb="20px">
        <Button
          variant="outline"
          mr="10px"
          _hover={{ bgColor: "#5244bb" }}
          onClick={previousHandler}
        >
          PREVIOUS
        </Button>
        {curr === total - 1 ? (
          <Button
            variant="outline"
            _hover={{ bgColor: "#5244bb" }}
            onClick={submitHandler}
          >
            SUBMIT
          </Button>
        ) : (
          <Button
            variant="outline"
            _hover={{ bgColor: "#5244bb" }}
            onClick={nextHandler}
          >
            NEXT
          </Button>
        )}
      </Flex>
    </Box>
  );
};

// box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
