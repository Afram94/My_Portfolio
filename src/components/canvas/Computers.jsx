import { Suspense, useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  
  return (
    <mesh>  // Container for grouping 3D objects
      <hemisphereLight
        intensity={0.15}  // Amount of light emitted
        groundColor= "black" // Color of the light from below
        />  
      <pointLight intensity={1} // Amount of light emitted in all directions
      />  
      <spotLight position={[-20, 50, 10]}  // Position of the spotlight in the 3D space
        angle={0.12}  // Angle of the light cone
        penumbra={1}  // Softness of the light's edge
        intensity={1}  // Amount of light emitted
        castShadow  // Enables casting shadows
        shadow-mapSize={1024}  // Quality of the shadows
      />
      <primitive  // Renders the 3D model
        object={computer.scene}  // The loaded 3D model
        scale={isMobile ? 0.7 : 0.75}  // Size of the model, adjusted for mobile/desktop
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}  // Position of the model in 3D space
        rotation={[-0.01, -0.2, -0.1]}  // Rotation angles (in radians) for the model
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
      frameloop="demand"  // Determines how often the scene is re-rendered; "demand" means only when necessary
      shadows  // Enables shadow rendering
      camera={{position:[20, 3, 5], fov: 25}}  // Camera properties like position and field of view
      gl={{preserveDrawingBuffer: true}}  // WebGL setting; retains the buffer for further use
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls  // Provides controls for orbiting the scene with mouse or touch
          enableZoom={false}  // Disables zooming functionality
          maxPolarAngle={Math.PI / 2}  // Limits the maximum orbit angle vertically
          minAzimuthAngle={Math.PI / 2}  // Limits the minimum orbit angle horizontally
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all // Preloads all assets in the scene for faster rendering
      />  
    </Canvas>
  )
}

export default ComputersCanvas