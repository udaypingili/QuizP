import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InputComponent from './InputCompoent/InputComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <App /> */}
    <InputComponent />
  </StrictMode>,
)
