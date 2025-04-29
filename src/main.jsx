import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/Global/Global.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import ModeProvider from './providers/ModeProvider/ModeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider>
      <ModeProvider>
        <App />
      </ModeProvider>
    </ChakraProvider>
  </BrowserRouter>
)
