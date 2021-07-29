import { motion } from 'framer-motion'
import React from 'react'
import './Box4.css'

const Box4 = () => {
	

	return (
		<div className="box-container">
			<motion.div 
			className="box"
			animate={{
				scale: [
					1, 1.4, 1.4, 1, 1
				],
				borderRadius: [
					"20%", "20%", "50%", "50%", "20%"
				],
				rotate: [
					0, 0, 270, 270, 0
				]
			}}
			transition={{
				duration: 5
			}}
			>
				<h2 style={{color: "white"}}>Watch Me Morph!</h2>
				</motion.div>
		</div>
	)
}

export default Box4
