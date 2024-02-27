import { useState } from 'react'
import styles from "@/styles/roomicon.module.css";
import AddRoom from "@/components/addroom";

export default function RoomIcon2() {
  const [showAddRoom, setShowAddRoom] = useState(false);
  return (
    <>
       {showAddRoom && <AddRoom onClose={() => setShowAddRoom(false)} />}
      <div className={styles.top}>
        <div className={styles.topA}></div>
        {/*<div className={styles.topB}>B</div> */}
        <div className={styles.topC}>
          <img
            src="/img/chat2.png"
            // alt="{v.name} "
          />
        </div>
        {/* <div className={styles.topD}>D</div>*/}
        <div className={styles.topE}>
          <button
          className={styles.topEb}
            onClick={() => {
              setShowAddRoom(true);
            }}
          >
            <p className={styles.topEp}>創建房間</p>
          </button>
         
          {/* <p>創建房間</p> */}
        </div>
      </div>
    </>
  );
}
