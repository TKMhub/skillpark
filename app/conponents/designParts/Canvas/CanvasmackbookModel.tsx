import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Float,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";
import styles from "./Canvas.module.scss";

const Model = () => {
  const { scene } = useGLTF("/3d/model.gltf");
  return <primitive object={scene} scale={[1.2, 1.2, 1.2]} />;
};

const CanvasmackbookModel = () => {
  return (
    <div className={styles.Canvas}>
      <Canvas camera={{ position: [0, 2, 5], fov: 70, near: 0.1, far: 2000 }}>
        <ambientLight />
        <pointLight position={[0, 6, 5]} intensity={1000} />
        <PresentationControls config={{ mass: 4 }} snap={{ mass: 4 }}>
          <Text
            fontSize={0.6}
            position={[0, 2.525, 0.75]}
            rotation={[-0.2, 0, 0]}
          >
            We assist in skill acquisition through our service.
          </Text>
          <Float rotationIntensity={1.5}>
            <rectAreaLight />
            <Model />
          </Float>
        </PresentationControls>
        <ContactShadows scale={7} blur={2.4} opacity={0.7} position-y={-2.0} />
      </Canvas>
    </div>
  );
};

export default CanvasmackbookModel;
