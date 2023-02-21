import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const Results = () => {
  const correct_ans = useSelector((store) => store.AppReducer.correct_ans);
  const questions = useSelector((store) => store.AppReducer.questions);

  return (
    <Box p="30px 10px 0 10px">
      <Heading textAlign="center">Quiz Result</Heading>
      <TableContainer mt="50px">
        <Table size="sm" variant="striped">
          <Thead>
            <Tr>
              <Th>Correct answers</Th>
              <Th>Incorrect answers</Th>
              <Th>Total score</Th>
              <Th>Percentage (%)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{correct_ans}</Td>
              <Td>{questions?.length - correct_ans}</Td>
              <Td>{correct_ans * 1}</Td>
              <Td>{Math.round((correct_ans / questions.length) * 100)}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
