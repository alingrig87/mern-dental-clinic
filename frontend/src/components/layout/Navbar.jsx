import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
	return (
		<div
			className="shadow-md w-full"
			style={{
				background: '#000419',
				fontFamily: '"Creattion Demo", sans-serif',
				color: 'white',
			}}
		>
			<div className="md:px-10 py-4 px-7">
				{/* Logo here */}
				<div className="flex text-2xl cursor-pointer items-center gap-2">
					<FontAwesomeIcon icon={faTooth} beatFade />
					<h1>My Dental Clinic</h1>
				</div>
			</div>
		</div>
	);
};
