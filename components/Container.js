import { Flex } from '@chakra-ui/react';
import React from 'react';

const Container = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      w="100%"
      h="100%"
      border="1px solid black"
    >
      {children}
    </Flex>
  );
};

export default Container;
