import {useState} from 'react';
import { Field, Form, Formik } from 'formik';
import { Input, Button, FormLabel, Heading, Text, FormControl, FormErrorMessage, Container, Stack, Checkbox, Link } from '@chakra-ui/react'
import { colors } from '../../../config/colors';
import InputMask from 'react-input-mask'


export function SignUp() {
  function validateName(value) {
    let error
    if (!value) {
      error = "Digite seu nome"
    }
    return error
  }
  function validateEmail(value) {
    let error
    if (!value) {
      error = "Digite seu email"
    }
    return error
  }
  function validatePassword(value) {
    let error
    if (!value) {
      error = "Digite sua senha"
    }
    return error
  }
  function validateCpf(value) {
    let error
    if (!value) {
      error = "CPF invalido"
    }
    return error
  }

  const [document, setDocument] = useState('')

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        cpf: "",
      }}
      onSubmit={(values, actions) => {

        values.cpf= values.cpf.replace(/[^0-9]/g,"")


        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Container >
          <Form>

            <Text textAlign={['center', 'center', 'start']} color={colors.grey700} fontWeight="bold">Registro</Text>

            <Heading margin='1rem 0' fontSize="2rem" color={colors.red500} textAlign={['center', 'center', 'start']}>Faça seu cadastro</Heading>

            <Field name="name" validate={validateName} >
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name" color={colors.red500} fontWeight='bold'>Nome</FormLabel>
                  <Input {...field} id="name" placeholder="Digite seu nome" />
                  <FormErrorMessage >{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="email" validate={validateEmail} >
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel htmlFor="email" color={colors.red500} fontWeight='bold'>E-mail</FormLabel>
                  <Input {...field} id="email" placeholder="Digite seu e-mail" />
                  <FormErrorMessage >{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="password" validate={validatePassword}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.password && form.touched.password}>
                  <FormLabel htmlFor="password" color={colors.red500} fontWeight='bold'>Senha</FormLabel>
                  <Input type="password" {...field} id="Password" placeholder="Digite sua senha" />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="cpf">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.cpf && form.touched.cpf}>
                  <FormLabel htmlFor="cpf" color={colors.red500} fontWeight='bold'>CPF</FormLabel>
                  <Input as = {InputMask} mask="***.***.***-**" {...field} id="cpf" placeholder="000.000.000-00" />
                  <FormErrorMessage>{form.errors.cpf}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Stack spacing={2} 
            direction="row" 
            justifyContent='space-around' 
            alignItems='center'>

              <Checkbox colorScheme="red"
                defaultIsChecked textAlign='start'>
                Ao informar seus dados e seguir para a próxima etapa, você automaticamente concorda com nossa <Link href='www.google.com'
                  font-size='1rem'
                  fontWeight='bold'
                  color={colors.grey500}
                >Política de Privacidade</Link>
              </Checkbox>
              <Text></Text>
            </Stack>
            <Button
              padding={["", '1rem 8rem', '1rem 12rem']}
              mt='2rem'
              background={colors.red500}
              isLoading={props.isSubmitting}
              color={colors.white}
              type="submit"
            >
              Registrar-se
            </Button>

          </Form>

        </Container>
      )}
    </Formik>
  )
}

