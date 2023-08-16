import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faXmark,
	faHouseMedicalCircleCheck,
	faHandHoldingMedical,
	faCreditCard,
	faSmileWink,
	faCalendarCheck,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import './style.css';

export const Navbar = () => {
	const links = [
		{ name: 'Acasă', path: '/', icon: faHouseMedicalCircleCheck },
		{ name: 'Servicii', path: '/servicii', icon: faHandHoldingMedical },
		{
			name: 'Preturi',
			path: '/preturi',
			icon: faCreditCard,
		},
		{
			name: 'Programări',
			path: '/programari',
			icon: faCalendarCheck,
		},
		{
			name: 'Testimoniale',
			path: '/testimoniale',
			icon: faSmileWink,
		},
		{ name: 'Contact', path: '/contact', icon: faEnvelope },
	];

	const [isOpen, setIsOpen] = useState(false);

	const onClickMenuButton = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="shadow-md w-full">
			<div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white text-blue-800">
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
					className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 md:static absolute md:z-auto
               pr-12 bg-white
                z-1 left-0 transition-all duration-500 ease-in ${
									isOpen ? 'top-12' : 'top-[-490px]'
								}`}
				>
					{links.map((link, index) => (
						<li
							key={index}
							className="my-7 md:my-0 md:ml-8 flex gap-1 items-center"
						>
							<FontAwesomeIcon icon={link.icon} />
							<a className="menu-text" href={link.path}>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
