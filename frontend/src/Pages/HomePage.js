import React from 'react'
import {Container, Box, Text, Tabs, TabPanels,TabPanel, TabList, Tab} from '@chakra-ui/react';
import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';


const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box 
      d="flex"
      justifyContent="center"
      p={3}
      bg={"white"}
      w="100%"
      m="10px 0 15px 0"
      borderRadius="lg"
      borderWidth='1px'
      >
        <Text fontSize='4xl' fontFamily='Roboto' color='black'>
          Chat-App
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList margin="1em">
          <Tab width="50%">Login</Tab>
          <Tab width="50%">Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login/>
          </TabPanel>
          <TabPanel>
            <SignUp/>
          </TabPanel>
        </TabPanels>
      </Tabs>
            </Box>
            HomePage</Container>
  )
}

export default HomePage