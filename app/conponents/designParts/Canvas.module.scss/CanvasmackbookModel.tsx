import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styles from "./Canvas.module.scss";

const CanvasmackbookModel = () => {
  const macbookModel = useGLTF("/3d/model.gltf");

  return (
    <div className={styles.canvasStyle}>
      <Canvas
        className={styles.canvasStyle}
        camera={{ fov: 45, near: 0.1, far: 2000 }}
      >
        <OrbitControls />
        <ambientLight />
        <primitive object={macbookModel.scene} />
      </Canvas>
    </div>
  );
};

export default CanvasmackbookModel;
