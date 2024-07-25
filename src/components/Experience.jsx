import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, Environment, OrbitControls } from '@react-three/drei'
import Background from 'three/src/renderers/common/Background.js'

const Experience = () => {
  return (
	<>
	<Canvas>
		<OrbitControls />
		<ambientLight intensity={1}/>
		<Environment preset="sunset" />
		
		
		<Box>
			<meshStandardMaterial attach="material" color="hotpink" />
		</Box>
	</Canvas>
	</>
  )
}

export default Experience