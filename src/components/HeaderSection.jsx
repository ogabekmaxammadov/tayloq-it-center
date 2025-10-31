import { NavLink } from 'react-router-dom'
import '../App.css'
import { useModal } from './ModalContext'

const HeaderSection = () => {
	const { modalOpen, setModalOpen } = useModal()

	return (
		<div>
			<header>
				<div className='max-width display-flex space-between'>
					<h1>Logotip</h1>
					<nav>
						<ul className='display-flex gap-30'>
							<li>
								<NavLink to={'/'}>Bosh Sahifa</NavLink>
							</li>
							<li>
								<NavLink to={'/courses'}>Kurslar</NavLink>
							</li>
							<li>
								<NavLink to={'/teachers'}>Ustozlar</NavLink>
							</li>
							<li>
								<NavLink to={'/about'}>Haqimizda</NavLink>
							</li>
						</ul>
					</nav>
					<div className='head-btns display-flex gap-30'>
						<a href='#contact' className='btn-primary btn contact-btn-nav'>
							Bog'lanish
						</a>
						<button
							className='btn-secondary btn'
							onClick={() => setModalOpen(true)}
						>
							Ro'yxatdan o'tish
						</button>
					</div>
				</div>
			</header>
		</div>
	)
}

export default HeaderSection
