import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import 'font-awesome/css/font-awesome.min.css';
import './index.css'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

)
 