import { FaReact } from 'react-icons/fa'
import { GrDocumentCsv } from 'react-icons/gr'
import { IoBagCheckOutline } from 'react-icons/io5'
import { LuUserRoundCheck } from 'react-icons/lu'
import { RiFileWord2Line } from 'react-icons/ri'
import { SiInteractiondesignfoundation } from 'react-icons/si'
import './App.css'

function App() {
	return (
		<>
			<div className='home-section'>
				<header className=''>
					<div className='max-width display-flex space-between'>
						<h1>Logotip</h1>
						<nav>
							<ul className='display-flex gap-30'>
								<li>
									<a href=''>Home</a>
								</li>
								<li>
									<a href=''>Kurslar</a>
								</li>
								<li>
									<a href=''>Ustozlar</a>
								</li>
								<li>
									<a href=''>Haqimizda</a>
								</li>
							</ul>
						</nav>
						<div className='head-btns display-flex gap-30'>
							<button className='btn-primary btn contact-btn-nav'>
								Bog'lanish
							</button>
							<button className='btn-secondary btn'>Ro'yxatdan o'tish</button>
						</div>
					</div>
				</header>

				<section className='main-section display-flex direction-column'>
					<div className='main-inform'>
						<h2 className='color-white'>O'rganish, O'sish va Rivojlanish</h2>
						<h2 className='color-blue'>Tayloq IT Park bilan</h2>
						<p>
							Mutaxassis o'qituvchilar bilan shug'ullaning, <br />
							hamfikrlar bilan hamkorlik qiling va amaliy ko'nikmalarni
							rivojlantiring
						</p>
					</div>
				</section>
				<div className='max-width'>
					<section className='second-section display-flex space-between'>
						<div className='second-inform'>
							<h3 className='color-blue'>Bizning ilmiy yondashuvimiz</h3>
							<h2>
								Sifatli ta'lim, <br /> cheksiz salohiyat
							</h2>
							<p>
								Bizning akademiyamiz o'qituvchilar va talabalar uchun o'sish va
								muvaffaqiyatga yordam beradigan jonli jamoadir. Biz
								qo'llab-quvvatlovchi va boyitish muhitini ta'minlaymiz, unda
								repetitorlar o'quvchilarni o'z ilmiy maqsadlariga erishish
								yo'lida ilhomlantirish va yo'naltirish huquqiga ega.
							</p>
							<p>
								Bizning akademiyamiz hamkorlik, tanqidiy fikrlash va samarali
								muloqotni targ'ib qiladi, uzluksiz o'rganish madaniyatini va
								intellektual qiziqishni rivojlantiradi.
							</p>
						</div>
						<div className='second-img'>
							<img
								src='https://media.istockphoto.com/id/1570178815/photo/father-helping-son-with-homework.jpg?s=612x612&w=0&k=20&c=_y5MKRU76jlPFX45x1_i7gD1yQq-BxUha2osC5xa9Oc='
								alt=''
							/>
						</div>
					</section>
				</div>

				<div className='max-width'>
					<section className='third-section'>
						<h1>
							<span>Nega</span> Tayloq IT Center?
						</h1>
						<h3>
							Siafatli ta'lim, tajribali o'qituvchilar va kafolatlangan amaliyot
						</h3>
						<div className='third-inform display-flex'>
							<div className='inform-item'>
								<IoBagCheckOutline className='icon' />
								<h2>Ish kafolati va 100% joylashtirish maqsadimiz</h2>
								<h4>
									Akademiya hozirgacha 70% joylashtirish rekordi bilan ish
									kafolatini ta'minlaydi.
								</h4>
							</div>

							<div className='inform-item'>
								<LuUserRoundCheck className='icon' />
								<h2>Jaxon talabidagi mutahasis bo'lib yetishasiz</h2>
								<h4>
									Biz sanoat mutaxassislari rahbarligida haqiqiy loyihalar
									ustida ishlash imkoniyati bilan dinamik mahoratga asoslangan
									treningni taklif qilamiz.
								</h4>
							</div>

							<div className='inform-item'>
								<GrDocumentCsv className='icon' />
								<h2>O'z kasbingizda professional kadr bo'ling</h2>
								<h4>
									Taqdimot, rezyume va rezyume yaratish, ofis odob-axloq
									qoidalari kabi shaxsiyatni shakllantirish bo'yicha yumshoq
									ko'nikmalarni o'rganing.
								</h4>
							</div>
						</div>
					</section>
				</div>

				<section className='rec-courses display-flex'>
					<div className='max-width display-flex dek'>
						<div className='rec-courses-inform'>
							<h1>
								<span>Hozirgi kurs takliflarimiz</span> bilan tanishing
							</h1>
							<p>
								Bizning kurslarimiz sizning ta'lim tajribangizni boyitish va
								o'zgartirish uchun puxta ishlab chiqilgan.
							</p>
							<button className='btn-secondary btn'>Kurslarni Ko'rish</button>
						</div>
						<div className='rec-imgs'>
							<div className='rec-img1 imgg'>
								<div className='rec-img'>
									<RiFileWord2Line className='iconn' />
									<h1>Kompyuter Savodxonligi</h1>
								</div>
							</div>
							<div className='rec-img2-3 display-flex '>
								<div className='rec-img2 imgg'>
									<div className='rec-img'>
										<FaReact className='iconn' />
										<h1>Frontend Dasturlash</h1>
									</div>
								</div>
								<div className='rec-img3 imgg'>
									<div className='rec-img'>
										<SiInteractiondesignfoundation className='iconn' />
										<h1>Grafik Dizayn</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default App
