import { Link } from "react-router-dom";

import About from './About'
import coding  from '../Images/people-coding.png'
import Footer from './Footer'

export const handleScroll = (element_id) => {

	const element = document.getElementById(element_id); 

	if (element)
	{
		console.log(`${element_id} has been clicked`);
		element.scrollIntoView({ behavior: 'smooth' });
	}
};


export function Navigation(){
	return (
		<div className="inline-flex bg-black sticky text-slate-200 p-4 gap-2 cursor-pointer w-full items-center justify-around align-middle space-x-2 shadow-cyan-50">
			<Link to="/">
				<h1 className='text-5xl cursor-pointer hover:text-blue-500 shadow-lg'>ProDev.io</h1>
			</Link>
			<button onClick={() => handleScroll('about-us')}>
				<h2 className='hover:text-yellow-50'>WHAT WE DO</h2>
			</button>

			<button onClick={() => handleScroll('contact_form')}>
				<h2 className='hover:text-yellow-50'>CONTACT US</h2>
			</button>
		</div>
	)
}


function HomeContent(){
	return (
		<section className="bg-cover bg-local p-5 w-full h-96 bg-clip-padding" style={{ backgroundImage : `url(${coding})`}}>
			<div className='p-5 text-slate-600 grid grid-rows-2 gap-6'>
				<p className='text-8xl p-5 text-white font-semibold'>
					You Imagine it, We Build it!
				</p>
			<div>
				<button 
					className
					='border-black animate-bounce rounded font-thin bg-black
					 text-white p-2 hover:bg-white hover:text-black scroll-smooth'
					 onClick={() => handleScroll('contact_form')}
					 >
					Tell Us Your Vison
				</button>
			</div>
			</div>
		</section>
	)
}

function Home(){
	return(
		<div className="grid gap-5 snap-center" id="main">
			<Navigation />
			<HomeContent />
			<About />
			<Footer scrollUp={handleScroll}/>
		</div>
	)
}


export default Home;