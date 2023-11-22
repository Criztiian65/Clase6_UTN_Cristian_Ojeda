import { Box, Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import {  Formik, useFormik } from 'formik'
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
            name: Yup.string().required("Campo Obligatorio"),
            lastname: Yup.string().required("Campo Obligatorio!!!!!!!!!!!!!!!!!!!!!!!!!"),
            email: Yup.string()
              .email("Ingrese un Email valido")
              .required("Campo Obligatorio"),
            phone: Yup.number("Ingresar un Numero de Telefono")
              .min(9, "minimo 9 digitos")
              .required("Campo Obligatorio"),
            pass: Yup.string()
              .min(2, "Debe tener minimo 8 caracteres")
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
    <Flex bg='blue.100' justify='center'>
      <Box >

        <Formik >
            <form onSubmit={handleSubmit}>
                <FormControl w={['auto', null, '500px']} >
                    <FormLabel htmlFor="name">Nombre: </FormLabel>
                    <Input type="text" name="name" id="name" onChange={handleChange} />
                    {(touched.name && errors.name) && 
         <div>{errors.name}</div>}

                    <FormLabel htmlFor="lastname">Apellido: </FormLabel>
                    <Input type="text" name="lastname" id="lastname" onChange={handleChange} />
                    {(touched.lastname && errors.lastname) && (
         <div>{errors.lastname}</div>
       )}

                    <FormLabel htmlFor="phone">Telefono: </FormLabel>
                    <Input type="number" name="phone" id="phone" onChange={handleChange} />
                    {touched.phone && errors.phone ? (
         <div>{errors.phone}</div>
       ) : null}

                    <FormLabel htmlFor="email">Correo: </FormLabel>
                    <Input type="email" name="email" id="email" onChange={handleChange} />
                    {touched.email && errors.email ? (
         <div>{errors.email}</div>
       ) : null}

                    <FormLabel htmlFor="pass">Contraseña: </FormLabel>
                    <Input type="password" name="pass" id="pass" onChange={handleChange} />
                    {(touched.pass && errors.pass) && (
         <div>{errors.pass}</div>
       )}

                    <FormLabel htmlFor="pass2">Repetir contraseña: </FormLabel>
                    <Input type="password" name="pass2" id="pass2" onChange={handleChange} />
                    {(touched.pass2 && errors.pass2) && (
         <div>{errors.pass2}</div>
       )}

                    <Button type='submit' >Enviar</Button>
                </FormControl>
            </form>
        </Formik>
      </Box>

    </Flex>

    )
}

export default Form




// <Formik
//   initialValues={{ name: 'Sasuke' }}
//   onSubmit={(values, actions) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2))
//       actions.setSubmitting(false)
//     }, 1000)
//   }}
// >
//   {(props) => (
//     <Form>
//       <Field name='name' validate={validateName}>
//         {({ field, form }) => (
//           <FormControl isInvalid={form.errors.name && form.touched.name}>
//             <FormLabel>First name</FormLabel>
//             <Input {...field} placeholder='name' />
//             <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//           </FormControl>
//         )}
//       </Field>
//       <Button
//         mt={4}
//         colorScheme='teal'
//         isLoading={props.isSubmitting}
//         type='submit'
//       >
//         Submit
//       </Button>
//     </Form>
//   )}
// </Formik>