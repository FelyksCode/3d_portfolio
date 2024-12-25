import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import FelixTheCat from "../models/FelixTheCat";
import Sky from "../models/Sky";
{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */
}

function Home() {
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

  const [modelScale, modelPosition, modelRotation] = adjustModelForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 2000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          {/* <Sky position={[-1, -1, -1]} /> */}
          <FelixTheCat
            position={modelPosition}
            scale={modelScale}
            rotation={modelRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
