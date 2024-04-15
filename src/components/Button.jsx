import React from "react";

import { motion } from "framer-motion";

const Button = ({ text, onClick }) => {
	return (
		<motion.button
			className="box"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}
			onClick={onClick}
		>
			{text}
		</motion.button>
	);
};

export default Button;
