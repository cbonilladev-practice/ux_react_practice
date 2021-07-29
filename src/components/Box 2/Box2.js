import { motion } from 'framer-motion'
import React, { useState } from 'react'
import './Box2.css'

const Box1 = () => {
	const [isAnimating, setIsAnimating] = useState(false)

	return (
		<div className="box-container">
			<motion.div 
				className="box"
				whileHover={{
					scale: 1.1
				}}
				whileTap={{
					scale: 0.9
				}}
				drag
				dragConstraints={{
					right: 20,
					left: 20,
					top: 20,
					bottom: 20
				}}
				onClick={() => setIsAnimating(!isAnimating)}
			><h2 style={{color: "white"}}>Click Me!</h2></motion.div>
		</div>
	)
}

export default Box1
