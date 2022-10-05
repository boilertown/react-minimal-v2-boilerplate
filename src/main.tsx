import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { App } from './App'
import './index.css'

const container = document.getElementById('app')
const root = createRoot(container as HTMLElement)

root.render(
	<BrowserRouter>
		<StrictMode>
			<App />
		</StrictMode>
	</BrowserRouter>,
)
