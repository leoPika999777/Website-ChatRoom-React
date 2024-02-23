
import styles from "@/styles/roomicon.module.css";



export default function RoomIcon() {
  return (
    <>
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
        <p>創建房間</p></div> 
      </div>
    </>
  );
}
