"use client";
import styles from "./Top.module.scss";
import TextEffect from "./conponents/designParts/TextEffect";
import { motion } from "framer-motion";
import CanvasmackbookModel from "./conponents/designParts/Canvas.module.scss/CanvasmackbookModel";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: { opacity: 1, x: "0" },
  };

  return (
    <>
      <div className={styles.background}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ type: "spring", stiffness: 10, damping: 6 }}
        >
          <div className="flex">
            <TextEffect title="skillPark" id="title" />
          </div>
        </motion.div>
      </div>
      <CanvasmackbookModel />
    </>
  );
}
