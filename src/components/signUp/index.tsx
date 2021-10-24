import { SignUp } from "./signUp"
import { Flex, Container, Image } from '@chakra-ui/react'

export function RegisterAuthentication() {
  return (

    <Flex
      height='100vh'
      textAlign='center'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      margin='0 auto'
      >
      
      <SignUp />
    </Flex>

  )
}