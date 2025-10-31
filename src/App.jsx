import { Route, Routes } from 'react-router'
import HeaderSection from './components/HeaderSection'
import CoursesPage from './pages/coursesPage/CoursesPage'
import HomePage from './pages/HomePage'

const App = () => {
	return (
		<div>
			<HeaderSection />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='courses' element={<CoursesPage />} />
			</Routes>
		</div>
	)
}

export default App
