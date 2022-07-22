import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
  return (
    <Flex
      alignItems="center"
      width="100%"
      justifyContent="center"
      border="1px solid white"
    >
      <Image
        boxSize="200px"
        src="./supabase-logo-icon.png"
        alt="Supabase Logo"
      />
      <Heading as="h1" fontSize="92px" fontFamily="Rubic">
        SupaTips
      </Heading>
    </Flex>
  );
};

export default Hero;
