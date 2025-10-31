import { useState } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { useModal } from './ModalContext'

const RegistrationModal = () => {
	const { modalOpen, setModalOpen } = useModal()
	const [register, setRegister] = useState({
		name: '',
		phone: '',
		course: '',
	})

	const handleChange = e => {
		setRegister({ ...register, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		setModalOpen(false)

		const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
		const chatId = import.meta.env.VITE_CHAT_ID

		const message = `
📝Yangi ma'lumotlar!
👤Ism: ${register.name}
📞Telefon: ${register.phone}
📓Kurs: ${register.course}
`

		fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: chatId,
				text: message,
				parse_mode: 'HTML',
			}),
		})
			.then(res => {
				if (res.ok) {
					alert(
						`Ma'lumotlaringiz yuborildi! ✅ Tez orada siz bilan bog'lanamiz`
					)
					setRegister({ name: '', phone: '', course: '' })
				} else {
					alert("Xatolik yuz berdi! ❌ Iltimos, qayta urinib ko'ring.")
				}
			})
			.catch(err => console.error('Xatolik yuz berdi:', err))
	}

	return (
		<div className='regis'>
			<div className='back' onClick={() => setModalOpen(false)}></div>
			<form className='registration' onSubmit={handleSubmit}>
				<h3 onClick={() => setModalOpen(false)} className='close'>
					<IoMdCloseCircleOutline />
				</h3>
				<h2>Hozir ro'yxatdan o'ting va o'z kelajagingizni shakllantiring!</h2>

				<input
					type='text'
					placeholder='Ismingiz'
					required
					name='name'
					value={register.name}
					onChange={handleChange}
				/>
				<input
					type='tel'
					placeholder='Telefon raqamingiz'
					required
					name='phone'
					value={register.phone}
					onChange={handleChange}
				/>
				<select
					name='course'
					required
					value={register.course}
					onChange={handleChange}
				>
					<option value=''>Kursni tanlang</option>
					<option value='Kompyuter Savodxonligi'>Kompyuter Savodxonligi</option>
					<option value='Dasturlash'>Dasturlash</option>
					<option value='Grafik Dizayn'>Grafik Dizayn</option>
				</select>
				<button type='submit' className='btn-secondary btn'>
					Ro'yxatdan o'tish
				</button>
			</form>
		</div>
	)
}

export default RegistrationModal
