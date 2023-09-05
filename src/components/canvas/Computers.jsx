import { Suspense, useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
        groundColor= "black" />
        <pointLight intensity={1} />
        <spotLight position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
          <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
          />
    </mesh>
  )
}

const ComputersCanvas = () => {
      // Declare a state variable 'isMobile' and its updater function 'setIsMobile'
    const [isMobile, setIsMobile] = useState();

    // Set up an effect that runs after the component mounts
    useEffect(() => {
      // Create a media query to match viewport widths up to 500px
      const mediaQuery = window.matchMedia('(max-width: 500px)');

      // Initialize 'isMobile' based on the current media query match status
      setIsMobile(mediaQuery.matches);

      // Define a function to handle changes in the media query match status
      const handleMediaQueryChange = (event) => {
        // Update 'isMobile' based on the new match status
        setIsMobile(event.matches);
      };

      // Add an event listener for the 'change' event of the media query
      mediaQuery.addEventListener('change', handleMediaQueryChange);

      // Return a cleanup function to remove the event listener
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <Canvas
    freamLoop="demand"
    shadows
    camera={{position:[20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas