import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <Box p="30px 30px 0 0">
      <Flex justifyContent="flex-end">
        <Box>
          <Link
            as={RouteLink}
            to="/dashboard"
            _hover={{ textDecoration: "none" }}
          >
            Dashboard
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
