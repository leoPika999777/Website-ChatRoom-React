import React from "react";
import styles from "@/styles/roomicon.module.css";
export default function IndexRoomIcon() {
  return (
    <>
      <div className={styles.top}>
        {/* <div className={styles.topA}>A</div>
        <div className={styles.topB}>B</div> */}
        <div className={styles.topC}>
          <img
            src="/img/chat1.png"
            // alt="{v.name} "
          />
        </div>
        {/* <div className={styles.topD}>D</div>
        <div className={styles.topE}>E</div> */}
      </div>
    </>
  );
}
