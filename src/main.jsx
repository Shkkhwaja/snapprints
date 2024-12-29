import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="587331233299-jqo5l2nds2abh2fran39g8oc7h7cakdj.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
