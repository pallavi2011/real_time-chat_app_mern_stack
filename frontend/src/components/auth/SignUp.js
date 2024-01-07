import React, { useState } from 'react'
import { FormControl, FormLabel, VStack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
const SignUp = () => {
        const [name, setName] = useState()
        const [email, setEmail] = useState()
        const [password, setPassword] = useState()
        const [confirmPassword, setConfirmPassword] = useState()
        const [photo, setPhoto] = useState()
        const [show, setShow] = useState(false)

        const handleClick = () => {setShow(!show)}

        const postDetails = (picture) =>{

        }

        const submitHandler = () => {}
  return (
    <VStack spacing="5px" color='black'>
  <FormControl id='name' isRequired>
    <FormLabel>
        Name
    </FormLabel>
    <Input placeholder="Enter your name" onChange={(e) => setName(e.target.value) }/>
    
  </FormControl>
  <FormControl id='email' isRequired>
    <FormLabel>
        Email
    </FormLabel>
    <Input placeholder="Enter your email" onChange={(e) => setEmail(e.target.value) }/>
    
  </FormControl>
  <FormControl id='password' isRequired>
    <FormLabel>
        Password
    </FormLabel>
    <InputGroup>
    <Input type={show ? "text": "password"} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value) }/>
    <InputRightElement width='4.5rem'>
        <Button h="1.7rem" size="sm" onClick={handleClick}>
            {show ? "Hide":"Show"}
        </Button>
    </InputRightElement>
    </InputGroup>
    
    
  </FormControl>
  <FormControl id='password' isRequired>
    <FormLabel>
        Confirm Password
    </FormLabel>
    <InputGroup>
    <Input type={show ? "text": "password"} placeholder="Enter confirm your password" onChange={(e) => setConfirmPassword(e.target.value) }/>
    <InputRightElement width='4.5rem'>
        <Button h="1.7rem" size="sm" onClick={handleClick}>
            {show ? "Hide":"Show"}
        </Button>
    </InputRightElement>
    </InputGroup>
    
    
  </FormControl>
  <FormControl id='photo' isRequired>
    <FormLabel>
        Upload your profile Picture
    </FormLabel>
    <Input type="file" p={"1.5"}
    accept="image/*"
    onChange={(e) => postDetails(e.target.files[0])}/>
    
  </FormControl>
  <Button colorScheme='green' width="100%" style={{marginTop: 15}}
  onClick={submitHandler}>
        Sign Up
  </Button>
</VStack>
  )
}

export default SignUp