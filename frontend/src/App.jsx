import './App.css';
import { Navbar } from './components/layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Testimonials from './components/pages/Testimonials';
import Prices from './components/pages/Prices';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/servicii" element={<Services />} />
				<Route path="/preturi" element={<Prices />} />
				<Route path="/testimoniale" element={<Testimonials />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
};

export default App;
