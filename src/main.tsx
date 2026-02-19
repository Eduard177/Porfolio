import './style.css'
import { App } from './ui/App'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector<HTMLDivElement>('#app')!)
root.render(<App />)
