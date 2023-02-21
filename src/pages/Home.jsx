import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { getQuizQuestions } from "../redux/appReducer/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quizDetails, setQuizDetails] = useState({
    user_name: "",
    category: "",
    difficulty_level: "",
    number_of_ques: "",
  });

  const startQuiz = () => {
    dispatch(getQuizQuestions(quizDetails)).then((res) => {
      navigate("/quiz", { replace: true });
    });
    setQuizDetails({
      user_name: "",
      category: "",
      difficulty_level: "",
      number_of_ques: "",
    });
  };

  const handleQuizDetails = (e) => {
    let { name, value } = e.target;
    setQuizDetails({
      ...quizDetails,
      [name]: value,
    });
  };

  return (
    <Box w="500px" margin="auto" mt="20px">
      <Text textAlign="center" fontSize="4xl">
        Set up your Quiz
      </Text>
      <Flex
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        mt="50px"
        p="40px"
        flexDirection="column"
        justifyContent="center"
      >
        <Box pb="20px">
          <Input
            type="text"
            name="user_name"
            value={quizDetails.user_name}
            placeholder="Enter Your Name"
            onChange={handleQuizDetails}
          />
        </Box>
        <Box pb="20px">
          <Select
            name="category"
            placeholder="Select Category"
            value={quizDetails.category}
            onChange={handleQuizDetails}
          >
            <option value="gk">General Knowledge</option>
            <option value="sports">Sports</option>
            <option value="geography">Geography</option>
          </Select>
        </Box>
        <Box pb="20px">
          <Select
            name="difficulty_level"
            placeholder="Select Difficulty"
            value={quizDetails.difficulty_level}
            onChange={handleQuizDetails}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>
        </Box>
        <Box pb="20px">
          <Input
            type="number"
            name="number_of_ques"
            value={quizDetails.number_of_ques}
            placeholder="Choose number of Question"
            onChange={handleQuizDetails}
          />
        </Box>
        <Box>
          <Button
            w="100%"
            color="white"
            bgColor="#f50157"
            _hover={{ bgColor: "#ce054b" }}
            onClick={startQuiz}
          >
            START QUIZ
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
