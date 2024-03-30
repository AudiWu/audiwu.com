import { Model } from "@/components/model";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";

export const Home = () => {
  return (
    <div className="w-full h-screen fixed">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <ScrollControls pages={1}>
            <Scroll>
              <Model />
            </Scroll>
            <Scroll html style={{ width: "100%", height: "100vh" }}>
              <section className="h-[calc(100vh_-_104px)] flex flex-col justify-start sm:justify-center p-12">
                <div className="">
                  <h1 className="text-m sm:text-2xl font-normal mb-4">
                    Hi, my name is
                  </h1>
                  <h1 className="text-5xl sm:text-6xl font-black mb-3">
                    AUDI PUTERA MULIA
                  </h1>
                  <h1 className="text-lg sm:text-3xl font-bold mb-3">
                    WELCOME TO MY PERSONAL WEBSITE
                  </h1>
                  <h1 className="text-m sm:text-2xl font-medium sm:w-2/3">
                    I'm a web developer that enjoys creating things that live on
                    the internet.
                  </h1>
                </div>
              </section>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
    // </div>
  );
};
