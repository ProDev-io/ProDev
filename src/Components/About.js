import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


import ecom from '../Images/ecom.jpg';
import hosting from '../Images/hosting.jpg';
import res from '../Images/res.jpg';
import seo from '../Images/seo.jpg';
import domain from '../Images/domain.jpg';
import database from '../Images/database.jpg';

function RenderService({ image, serviceName }){
	return (
		<div
		className
		="flex items-center align-middle justify-center
		flex-col gap-y-2 cursor-pointer drop-shadow-lg
		hover:drop-shadow-2xl">
			<img data-src={image} data-sizes="auto" alt="" className='object-cover lazyload border rounded-lg h-80 w-full'/>
			<h3 className='border-b-4 border-yellow-950 mb-2'>{serviceName}</h3>
		</div>
	)
};


function About(){

	const missionList = [
		'Our mission is to deliver exceptional web development services that help businesses establish a strong online presence and achieve their goals.',
		'We strive to create innovative and user-friendly web solutions that are tailored to meet the unique needs of each of our clients.',
		'We are committed to staying up-to-date with the latest web technologies and trends, to ensure that our clients receive the most cutting-edge solutions.',
		'Our goal is to provide our clients with the highest level of customer service, responsiveness, and support throughout the entire web development process.',
		'We believe in building long-term partnerships with our clients, based on trust, transparency, and mutual respect, to help them achieve sustained success in their online endeavors.'
	];

	const servicesObjects = [
		{
			id: 1,
			name: 'Responsive Web Development',
			photo: res
		},
		{
			id: 2,
			name: 'Search Engine Optimization',
			photo: seo
		},
		{
			id: 3,
			name: 'Web Hosting',
			photo: hosting
		},
		{
			id: 4,
			name: 'Domain Name Registration & Adminstration',
			photo: domain
		},
		{
			id: 5,
			name: 'E-Commerce Building',
			photo: ecom
		},
		{
			id: 6,
			name: 'Database Design & Adminstration',
			photo: database
		}

	]

	return (
		<div className="p-5 m-5 flex flex-col gap- h-full">
			<h2 className='text-4xl p-3'>What We Do</h2>
			<section>
					<ul className='grid grid-cols-3 gap-2'>
						{ missionList.map((m) => {
							return (
							<li
							key={missionList.indexOf(m) + 1}
							className='p-4 m-4 cursor-pointer text-left text-xl border rounded-md shadow-2xl drop-shadow-lg hover:shadow-blue-500 transition-all ease-in-out hover:translate-y-1 hover:scale-110 duration-300'
							>
								{m}
								</li>
							)
						})}
					</ul>
			</section>

			<article className='p-5'>
					<h2 className='text-4xl p-3'>Services Offered</h2>
					<div className='grid grid-cols-3 items-center justify-center align-middle gap-x-6 gap-y-4 p-2'>
						{ servicesObjects.map((serv) => {
							const { id, name, photo } = serv;
							return <RenderService key={id} serviceName={name} image={photo} />
						})}
					</div>
			</article>
		</div>
	)
}

export default About;