import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/navegation/Nav.jsx'
import Footer from './components/footer/Footer.jsx'
import Form from './components/form/Form.jsx'


function App() {


  return (
    <ChakraProvider>
      <Nav />
      <Form/>
      <Footer />
    </ChakraProvider>
  )
}

export default App
