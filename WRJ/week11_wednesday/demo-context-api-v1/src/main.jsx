import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import BooksProvider from './providers/BooksProvider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <BooksProvider>
    <App />
  </BooksProvider>
)
