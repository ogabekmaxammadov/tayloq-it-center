import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import { ModalProvider } from './components/ModalContext.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<ModalProvider>
				<App />
			</ModalProvider>
		</BrowserRouter>
	</StrictMode>
)
