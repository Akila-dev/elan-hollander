import "./App.css";
import { motion } from "framer-motion";

import { Hero, About } from "./containers";
import { Navbar } from "./components";

function App() {
	return (
		<motion.div>
			<Hero />
			<About />

			<Navbar />
		</motion.div>
	);
}

export default App;
