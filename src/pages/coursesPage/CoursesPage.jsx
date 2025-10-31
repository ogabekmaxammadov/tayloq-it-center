import '../../App.css'
import './coursesPage.css'

const CoursesPage = () => {
	const courses = [
		{
			id: 1,
			img: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/08/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg',
			title: 'Frontend',
			description:
				"Dasturlashning forntend sohasini real loihalarga asoslangan darslarda o'rganing va yetuk mutahhasis bo'ling",
		},
		{
			id: 2,
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6st963Lv7fOO1eqGIWSKc3fjV-yMAQHaiw&s',
			title: 'Kompyuter Savodhonligi',
			description:
				"Zamon talabidagi eng kerakli kompyuter dasutrlarini va microtexnologiyalarni o'rganing",
		},
		{
			id: 3,
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fcFVSYH3Dzy3H5rEokRO5mJZsmkiHoo_SQ&s',
			title: 'Ingliz tili',
			description:
				"Professional dasturchi bo'lish uchun albatda ingliz tili ham kerak bo'ladi. Bizda esa ingliz tili kurslar ham siz uchun tayyor",
		},
		{
			id: 4,
			img: 'https://learn.g2.com/hubfs/iStock-1191609321%20%281%29.jpg',
			title: 'Grafik design',
			description:
				"Grafik design kurslarini o'rganing va bizning akademiyamiz bilan hamkorlik qiling va amaliy ko'nikmalarni rivojlantiring",
		},

		{
			id: 5,
			title: 'Suniy Intellekt',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s',
			description:
				"Kundan kunga rivojlanib borayotgan suniy intellekt sohasini ham tajribali ustozlarimizdan o'rganing",
		},
	]
	return (
		<div className='courses-page max-width'>
			<div className='courses-inform'>
				<h1>Kurslarimiz bilan tanishing</h1>
				<div className='courses'>
					{courses.map(course => (
						<div className='course'>
							<div className='course-image'>
								<img src={course.img} alt='' />
							</div>
							<div className='course-info'>
								<h2>{course.title}</h2>
								<p>{course.description}</p>

								<button className='btn btn-primary btnn'>Ko'proq o'qish</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default CoursesPage
