import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitQuiz } from "../redux/appReducer/action";
import { useNavigate } from "react-router-dom";

export const Quiz = () => {
  const questions = useSelector((store) => store.AppReducer.questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [curr, setCurr] = useState(0);
  const [correct, setCorrect] = useState(0);
  const toast = useToast();
  const total = questions.length;

  const nextHandler = () => {
    if (curr < total - 1) {
      setCurr(curr + 1);
    }
  };

  const submitHandler = () => {
    dispatch(submitQuiz(correct));
    navigate("/results", { replace: true });
  };

  const answerHandler = (e) => {
    const { name, value } = e.target;
    if (
      value ===
      decodeURIComponent(questions[curr]?.correct_answer).split("+").join(" ")
    ) {
      setCorrect(correct + 1);
      toast({
        title: "Correct answer.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Incorrect answer.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
        <Button
          name="op1"
          value={decodeURIComponent(questions[curr]?.correct_answer)
            .split("+")
            .join(" ")}
          variant="outline"
          mb="10px"
          _hover={{ bgColor: "#5244bb" }}
          onClick={answerHandler}
        >
          {decodeURIComponent(questions[curr]?.correct_answer)
            .split("+")
            .join(" ")}
        </Button>
        <Button
          name="op2"
          variant="outline"
          mb="10px"
          _hover={{ bgColor: "#5244bb" }}
          onClick={answerHandler}
          value={decodeURIComponent(questions[curr]?.incorrect_answers[0])
            .split("+")
            .join(" ")}
        >
          {decodeURIComponent(questions[curr]?.incorrect_answers[0])
            .split("+")
            .join(" ")}
        </Button>
        <Button
          name="op3"
          value={decodeURIComponent(questions[curr]?.incorrect_answers[1])
            .split("+")
            .join(" ")}
          variant="outline"
          mb="10px"
          _hover={{ bgColor: "#5244bb" }}
          onClick={answerHandler}
        >
          {decodeURIComponent(questions[curr]?.incorrect_answers[1])
            .split("+")
            .join(" ")}
        </Button>
        <Button
          name="op4"
          variant="outline"
          _hover={{ bgColor: "#5244bb" }}
          onClick={answerHandler}
          value={decodeURIComponent(questions[curr]?.incorrect_answers[2])
            .split("+")
            .join(" ")}
        >
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
