import { motion } from 'framer-motion'
import React, { useState } from 'react'
import './Box1.css'

const Box1 = () => {
	const [isAnimating, setIsAnimating] = useState(false)

	return (
		<div className="box-container">
			<motion.div 
				className="box"
				animate={{
					x: isAnimating ? '75vw' : 0,
					opacity: isAnimating ? 1 : 0.5,
					rotate: isAnimating ? 360: 0
				}}
				initial={{
					opacity: 0.1
				}}
				transition={{
					type: "spring",
					stiffness: 60
				}}
				onClick={() => setIsAnimating(!isAnimating)}
			><h2 style={{color: "white"}}>Click Me!</h2></motion.div>
		</div>
	)
}

export default Box1
