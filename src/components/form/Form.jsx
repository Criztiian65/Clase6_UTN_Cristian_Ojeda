import { Box, Button, Flex, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react'
import { Formik, useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'


// const schema = Yup.object().shape({
//     email: Yup.string().email('Email invalido').required
// })



const Form = () => {

  const { handleSubmit, handleChange, touched, errors } = useFormik({

    initialValues: {
      name: '',
      lastname: '',
      email: '',
      phone: '',
      pass: '',
      pass2: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Campo Obligatorio").min(3, "Es demasiado corto"),
      lastname: Yup.string().min(3, "Es demasiado corto").required("Campo Obligatorio"),
      email: Yup.string()
        .email("Ingrese un correo valido")
        .matches(/^[a-zA-Z0-9][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Correo no válido')
        .required("Campo Obligatorio"),
      phone: Yup.number("Ingresar un número de Teléfono")
        .min(9, "minimo 9 digitos")
        .required("Campo Obligatorio"),
      pass: Yup.string()
        .min(8, "Debe tener mínimo 8 caracteres")
        .required("Campo Obligatorio"),
      pass2: Yup.string()
        .oneOf([Yup.ref("pass"), null], "La contrasena no coincide")
        .required("Campo Obligatorio"),
    }),
    onSubmit: (values) => {
      console.log(values)

        ;
    }
  })

  return (
    <Flex bg='#0e87cc' align={{ base: 'auto', md: 'center' }} flexDirection='column' >
      <Stack
        bg='#b8bfb1'
        p='10px'
        my={{ md: '30px' }}
        w={{ md: '500px' }}
        borderRadius='lg'
        boxShadow='0px 0px 15px #000000'
      >
        <Box mb='15px' textAlign={'center'}>
          <Text fontSize='2xl' fontWeight='semibold' >Formulario de registro</Text>
        </Box>
        <Formik  >
          <form onSubmit={handleSubmit}>
            <FormControl px='8px' >
              <FormLabel htmlFor="name">Nombre: </FormLabel>
              <Input type="text" name="name" variant='flushed' id="name" placeholder='Nombre' onChange={handleChange} />
              {(touched.name && errors.name) &&
                <Box fontFamily={'Roboto'} color={'red'}>{errors.name}</Box>}

              <FormLabel htmlFor="lastname" mt='12px'>Apellido: </FormLabel>
              <Input type="text" name="lastname" variant='flushed' placeholder='Apellido' id="lastname" onChange={handleChange} />
              {(touched.lastname && errors.lastname) && (
                <Box fontFamily={'Roboto'} color={'red'}>{errors.lastname}</Box>
              )}

              <FormLabel htmlFor="phone" mt='12px'>Telefono: </FormLabel>
              <Input type="number" name="phone" variant='flushed' placeholder='Numero telefonico' id="phone" onChange={handleChange} />
              {touched.phone && errors.phone ? (
                <Box fontFamily={'Roboto'} color={'red'}>{errors.phone}</Box>
              ) : null}

              <FormLabel htmlFor="email" mt='12px'>Correo: </FormLabel>
              <Input type="email" name="email" variant='flushed' placeholder='Ejemplo@gmail.com' id="email" onChange={handleChange} />
              {touched.email && errors.email ? (
                <Box fontFamily={'Roboto'} color={'red'}>{errors.email}</Box>
              ) : null}

              <FormLabel htmlFor="pass" mt='12px'>Contraseña: </FormLabel>
              <Input type="password" name="pass" variant='flushed' placeholder='Nueva contraseña' id="pass" onChange={handleChange} />
              {(touched.pass && errors.pass) && (
                <Box fontFamily={'Roboto'} color={'red'}>{errors.pass}</Box>
              )}

              <FormLabel htmlFor="pass2" mt='12px'>Repetir contraseña: </FormLabel>
              <Input type="password" name="pass2" variant='flushed' placeholder='Repetir contraseña' id="pass2" onChange={handleChange} />
              {(touched.pass2 && errors.pass2) && (
                <Box fontFamily={'Roboto'} color={'red'}>{errors.pass2}</Box>
              )}

              <Flex mt='15px' justify='space-around'>


                <Button _focus={{
                  boxShadow:
                    '0 0 1.5px 3px rgba(88, 144, 255, .75), 0 10px 10px rgba(0, 0, 0, .55)',
                }} type='reset'>Vaciar registro</Button>

                <Button _focus={{
                  boxShadow:
                    '0 0 1.5px 3px rgba(88, 144, 255, .75), 0 10px 10px rgba(0, 0, 0, .55)',
                }} type='submit'  >Enviar</Button>
              </Flex>
            </FormControl>
          </form>
        </Formik>

      </Stack>
    </Flex>

  )
}

export default Form