import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import FelixTheCat from "../models/FelixTheCat";
import Bat from "../models/Bat";
import Sky from "../models/Sky";
import Clouds from "../models/Clouds";
import Batfly from "../models/BatFly";
import HomeInfo from "../components/HomeInfo";

function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustModelForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -60, -100];
    let rotation = [-0.4, -4.8, 0.2];
    if (window.innerWidth < 768) {
      screenScale = [0.18, 0.18, 0.18];
    } else {
      screenScale = [0.2, 0.2, 0.2];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustBatflyForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [0.08, 0.08, 0.08];
      screenPosition = [0, -4, -3];
    } else {
      screenScale = [0.1, 0.1, 0.1];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [modelScale, modelPosition, modelRotation] = adjustModelForScreenSize();
  const [batflyScale, batflyPosition] = adjustBatflyForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : " cursor-grab"
        }`}
        camera={{ near: 0.1, far: 8000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <ambientLight intensity={0.4} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Clouds />
          <Sky isRotating={isRotating} />
          <FelixTheCat
            position={modelPosition}
            scale={modelScale}
            rotation={modelRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Bat />
          <Batfly
            isRotating={isRotating}
            batflyScale={batflyScale}
            batflyPosition={batflyPosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
