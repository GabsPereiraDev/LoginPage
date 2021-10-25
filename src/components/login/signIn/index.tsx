import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Input, Button, FormLabel, Heading, Text, FormControl, FormErrorMessage, Container, Radio, Stack, Checkbox, Link } from '@chakra-ui/react'
import { colors } from '../../../config/colors';



export function SignIn() {
  function validateEmail(value) {
    let error
    if (!value) {
      error = "Email is required"
    }
    return error
  }
  function validatePassword(value) {
    let error
    if (!value) {
      error = "Password incorrect"
    }
    return error
  }

  return (
    <Formik
      initialValues={{
        Email: "",
        Password: ""
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Container mt="2rem">
          <Form>
            <Text textAlign={['center', 'center', 'start']} color={colors.grey700} fontWeight="bold">Login</Text>
            <Heading margin='1rem 0' fontSize="2rem" color={colors.red500} textAlign={['center', 'center', 'start']}>Acesse sua Conta</Heading>
            <Field name="Email" validate={validateEmail} >
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.Email && form.touched.Email}>
                  <FormLabel htmlFor="Email">Email</FormLabel>
                  <Input {...field} id="Email" placeholder="Email" />
                  <FormErrorMessage >{form.errors.Email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="Password" validate={validatePassword}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.Password && form.touched.Password}>
                  <FormLabel htmlFor="Password">Password</FormLabel>
                  <Input {...field} type="password" id="Password" placeholder="Password" />
                  <FormErrorMessage>{form.errors.Password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Stack spacing={10} direction="row" justifyContent='space-between'>
              <Checkbox colorScheme="red"
                defaultIsChecked>
                Matenha me conectado
              </Checkbox>
              <Link href='www.google.com'
                font-size='1rem'
                fontWeight='bold'
                color={colors.grey500}
              >Esqueci minha senha</Link>
            </Stack>
            <Button
              padding={["", '1rem 8rem', '1rem 14rem']}
              mt='2rem'
              background={colors.red500}
              isLoading={props.isSubmitting}
              color={colors.white}
              type="submit"
            >
              Entrar
            </Button>

          </Form>
          <Stack spacing={10} direction="row" justifyContent='end' >
        
            <Link href='www.google.com'
              font-size='1rem'
              fontWeight='bold'
              color={colors.grey500}
            >Não tenho conta</Link>
          </Stack>

        </Container>
      )}
    </Formik>
  )
}

