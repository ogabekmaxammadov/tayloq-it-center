import { createContext, useContext, useState } from 'react'
import RegistrationModal from '../components/RegistrationModal'

// Context yaratish
const ModalContext = createContext()

// Provider komponent
export const ModalProvider = ({ children }) => {
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<ModalContext.Provider value={{ modalOpen, setModalOpen }}>
			{children}

			{modalOpen && <RegistrationModal />}
		</ModalContext.Provider>
	)
}

// Contextdan foydalanish uchun hook
export const useModal = () => useContext(ModalContext)
