import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ShareContext from './contextAPI/ShareContext.jsx'
import RouteGuard from './contextAPI/RouteGaurd.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="872268448327-43it0a1fenjevcu7qaqrr6ldbf4oactj.apps.googleusercontent.com">
       <ShareContext>
         <RouteGuard>
          <App />
          </RouteGuard>    
         </ShareContext>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
