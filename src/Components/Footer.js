import { Link } from 'react-router-dom';
import { useState } from "react";
import emailjs from 'emailjs-com'

function ContactForm(){

	const [ formData, setFormData ] = useState ({
		name : '',
		email : '',
		subject : '',
		message : ''
	});

	const publicKey = "gBYo2VQ45aNmkz7Aq";
	const privateKey= process.env.REACT_APP_MAIL_JS_SECRET;
	const service_id = "service_zsy614j";
	const template_id = "template_0segr99"

	function handleChange(e){
			e.preventDefault();
			setFormData({...formData, [e.target.name] : e.target.value });
	}

	function handleSubmit(e){
		e.preventDefault();

		emailjs.send(service_id, template_id,{
			from_subject : formData.subject,
			from_name : formData.name,
			from_email : formData.email,
			message : formData.message
		}, {
			private_key : privateKey,
			public_key : publicKey
		}).then ((r) => {
			alert('Emaill sent successfully');
			console.log(r);
		}).catch ((e) => {
			console.log(e)
		});

		e.target.reset();
	}


	return(
			<form id='contact_form' className="p-3 flex flex-col gap-3 items-center justify-center align-middle scroll-smooth" onSubmit={(e) => handleSubmit(e)}>
							<label className="block text-left align-middle gap-6 w-full">
							<span>Your Name</span>
							<input
							name="name"
							type="text"
							placeholder="Example: John Doe"
							className="form-input w-full block border rounded-lg text-black"
							value={formData.name}
							onChange={(e) => handleChange(e)}/>
						</label>

						<label className="block text-left align-middle gap-6 w-full">
							<span>Email</span>
							<input
							name="email"
							type="email"
							placeholder="Example: visions@prodev.io"
							className="form-input w-full block border rounded-lg text-black"
							value={formData.email}
							onChange={(e) => handleChange(e)}/>
						</label>

						<label className="block text-left align-middle gap-6 w-full">
							<span>Subject</span>
							<input
							name="subject"
							type="text"
							placeholder="Subject"
							className="form-input block w-full border rounded-lg text-black"
							value={formData.subject}
							onChange={(e) => handleChange(e)}/>
						</label>

						<label className="block text-left align-middle gap-6 w-full">
						 <span>Message</span>
						 <textarea
						 name="message"
						 id="message"
						 rows="5"
						 className="form-input block p-2.5 w-full text-lg text-black rounded-lg border"
						 placeholder="Tell us what we shall do for you..."
						 value={formData.message}
						 onChange={(e) => handleChange(e)}>
						 </textarea>
						</label>

						<input type="submit" placeholder="Send Mail" className="shadow-sm"/>
		</form>

	)
}


function Footer( { scrollUp  }){
	return (
		<div className="bg-black h-full text-slate-200 p-4 text-left">
				<h2 className="text-3xl p-2 text-center"> Here's Our Contact Information :</h2>
				<div className="grid grid-cols-2 gap-6">
					<ContactForm />

					<div>
						<p>
							Questions or Queries :
						</p>

						<div className="text-yellow-50 flex flex-col gap-4">
							<span className ='underline hover:text-blue-600'>
								support@prodev.io
							</span>

							<span className="underline hover:text-blue-600">
								customercare@prodev.io
							</span>

							<span className="hover:text-blue-600">
								Call / Whatsapp : +254 758 925 528 | +254 798 347 396
							</span>
							<Link to="/">
								<button onClick={() => scrollUp('main')}>
									<h1 className='text-5xl cursor-pointer hover:text-blue-500 shadow-lg'>ProDev.io</h1>
								</button>
							</Link>
						</div>
					</div>
				</div>

			<span className="text-sm block text-center align-middle">ProDev Copyright 2023. All Rights Reserved </span>
		</div>
	)
}

export default Footer;


