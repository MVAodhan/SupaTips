import { Flex, Switch, useColorMode } from '@chakra-ui/react';
import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <Flex flexDir="column" border="1px solid orange" width="80%" height="100%">
      <Nav></Nav>
      <Flex justifyContent="flex-end" pr="10px" pt="10px"></Flex>
      {children}
    </Flex>
  );
};

export default Layout;
