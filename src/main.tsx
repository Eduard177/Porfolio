import './style.css'
import { App } from './ui/App'
import { createRoot } from 'react-dom/client'
import { LocaleProvider } from './context/LocaleContext'

const root = createRoot(document.querySelector<HTMLDivElement>('#app')!)
root.render(
  <LocaleProvider>
    <App />
  </LocaleProvider>
)
