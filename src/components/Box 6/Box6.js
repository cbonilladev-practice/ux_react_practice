import { motion } from 'framer-motion'
import React from 'react'
import './Box6.css'

const Box6 = () => {
	
	const floatVariant = {
		floating: {
			y: "-5vh",
			transition: {
				yoyo: Infinity,
				type: "spring",
				stiffness: 20,
				duration: 2,
				bounce: 0.3,
			}
		}
	}

	return (
		<div className="box-container">
			<motion.div 
				className="box"
				variants={floatVariant}
				animate="floating"
			>
				<h2 style={{color: "white"}}>Watch Me Float!</h2>
				</motion.div>
		</div>
	)
}

export default Box6
