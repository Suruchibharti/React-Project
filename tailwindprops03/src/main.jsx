import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Card username={"Tanishka"} btnText={"hello"}/>
    <Card username={"Shreya"} btnText={"hii"}/> */}
  </StrictMode>,
)
