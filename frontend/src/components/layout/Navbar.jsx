import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTooth, faXmark } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
	const links = [
		{ name: 'Acasă', path: '/' },
		{ name: 'Servicii', path: '/servicii' },
		{ name: 'Programează-te', path: '/programari' },
	];

	const [isOpen, setIsOpen] = useState(false);

	const onClickMenuButton = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="shadow-md w-full">
			<div
				className="md:px-10 py-4 px-7 md:flex justify-between items-center"
				style={{
					background: '#000419',
					color: 'white',
				}}
			>
				{/* Logo here */}
				<div className="flex text-2xl cursor-pointer items-center gap-2">
					<FontAwesomeIcon icon={faTooth} beatFade />
					<span
						style={{
							fontFamily: '"Creattion Demo", sans-serif',
						}}
					>
						My dental clinic
					</span>
				</div>
				<div
					onClick={onClickMenuButton}
					className="absolute right-8 top-6 cursor-pointer md:hidden"
				>
					{isOpen ? (
						<FontAwesomeIcon icon={faXmark} />
					) : (
						<FontAwesomeIcon icon={faBars} />
					)}
				</div>

				<ul
					className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 md:static absolute md:z-auto bg-[#000419]
               pr-12
                z-1 left-0 transition-all duration-500 ease-in ${
									isOpen ? 'top-12' : 'top-[-490px]'
								}`}
				>
					{links.map((link, index) => (
						<li key={index} className="my-7 md:my-0 md:ml-8">
							<a href={link.path}>{link.name}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
