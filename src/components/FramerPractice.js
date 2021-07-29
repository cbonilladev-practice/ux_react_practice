import React from 'react'
import BoxOne from '../components/Box 1/Box1'
import BoxTwo from '../components/Box 2/Box2'
import BoxThree from '../components/Box 3/Box3'
import BoxFour from '../components/Box 4/Box4'
import BoxFive from '../components/Box 5/Box5'
import BoxSix from '../components/Box 6/Box6'
import './FramerPractice.css'

const FramerPractice = () => {
	return (
		<div className="app-container">
			<h2>Some Framer Practice</h2>
			<BoxOne/>
			<BoxTwo/>
			<BoxThree/>
			<BoxFour/>
			<BoxFive/>
			<BoxSix/>
		</div>
	)
}

export default FramerPractice
