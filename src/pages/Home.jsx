import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import FelixTheCat from "../models/FelixTheCat";
import Baloon from "../models/Baloon";
import Sky from "../models/Sky";
import Clouds from "../models/Clouds";
{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */
}

function Home() {
  const [isRotating, setIsRotating] = useState(false);

  const adjustModelForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-10, -340, -840];
    let rotation = [0.1, -4.8, 0.22];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustBaloonForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [0.036, 0.036, 0.036];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [modelScale, modelPosition, modelRotation] = adjustModelForScreenSize();
  const [baloonScale, baloonPosition] = adjustBaloonForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : " cursor-grab"
        }`}
        camera={{ near: 0.1, far: 7000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Clouds />
          <Sky />
          <FelixTheCat
            position={modelPosition}
            scale={modelScale}
            rotation={modelRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Baloon
            isRotating={isRotating}
            baloonScale={baloonScale}
            baloonPosition={baloonPosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
