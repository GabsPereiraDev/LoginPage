import { SignIn } from "./signIn"
import { Flex, Container, Image } from '@chakra-ui/react'

export function LoginAuthentication() {
  return (

    <Flex
      textAlign='center'
      justifyContent='space-between'
      alignItems='center'
      height='auto'
      flexDirection={['column', 'column','row']}>
        
      <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" 
      height='100vh'
      />

      <SignIn />
    </Flex>

  )
}