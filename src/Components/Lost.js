import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import lost from '../Images/lost.gif';
import Footer from './Footer';
import { Navigation } from './Home';
import { handleScroll } from './Home';

function Lost(){
	return (
		<div className='h-full'>
				<div className='h-full'>
					<Navigation />
					<section className='p-6 m-6 grid grid-col-2 gap-6 items-center justify-center'>
							<h1 className='text-4xl'> Seems like you're lost </h1>
							<iframe src={lost} width="100%" height="100%" className="w-full h-96" title="lost" allowFullScreen></iframe>
					</section>
					<Footer scrollUp={handleScroll}/>
				</div>
		</div>
	)
};

export default Lost;