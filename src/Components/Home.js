
function Navigation(){
	return (
		<div className="inline-flex gap-2 cursor-pointer w-full items-center justify-around align-middle space-x-2">
			<h1 className="text-5xl p-2 font-mono">ProDev.io</h1>
			<h2 className="border-b-4 border-yellow-950">Contact Us</h2>
			<h2 className="border-b-4 border-yellow-950">Team</h2>
			<h2 className="border-b-4 border-yellow-950">Projects</h2>
		</div>
	)
}


function HomeContent(){
	return (
		<section className="grid grid-cols-2  gap-3">
			
		</section>
	)
}

function Home(){
	return(
		<div className="grid gap-5">
			<Navigation />
			<HomeContent />
		</div>
	)
}


export default Home;