import {
  Flex,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const Nav = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('black', 'white');
  return (
    <Flex>
      <Flex w="80%" pt="10px" pl="10px">
        <Text>Home</Text>
      </Flex>
      <Flex w="20%" justifyContent="flex-end" pr="10px" pt="10px">
        <Switch onChange={toggleColorMode} />
      </Flex>
    </Flex>
  );
};

export default Nav;
