import About from './About'
import coding  from '../Images/people-coding.png'


function Navigation(){
	return (
		<div className="inline-flex p-2 gap-2 cursor-pointer w-full items-center justify-around align-middle space-x-2">
			<h1 className="text-5xl font-mono">ProDev.io</h1>
			<h2 className="border-b-4 border-yellow-950">WHAT WE DO</h2>
			<h2 className="border-b-4 border-yellow-950">TEAM</h2>
			<h2 className="border-b-4 border-yellow-950">CONTACT US</h2>
		</div>
	)
}


function HomeContent(){
	return (
		<section className="bg-cover bg-local p-5 w-full h-96 bg-clip-padding" style={{ backgroundImage : `url(${coding})`}}>
			<div className='p-5 text-slate-600 grid grid-rows-2 gap-6'>
				<p className='text-5xl p-3 text-white font-semibold'>
					You Imagine it, We Build it!
				</p>

			<div>
				<button className='border rounded font-thin bg-blue-300 text-white p-2 hover:bg-slate-200 hover:text-black'>
					Tell Us Your Vison
				</button>
			</div>
			</div>
		</section>
	)
}

function Home(){
	return(
		<div className="grid gap-5">
			<Navigation />
			<HomeContent />
			<About />
		</div>
	)
}


export default Home;