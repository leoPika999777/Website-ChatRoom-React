import React from "react";
import styles from "@/styles/room.module.css";
import Navbar from "@/components/navbar";
import RoomIcon from "@/components/room-roomicon copy";

import { IoAccessibilitySharp } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { PiFinnTheHumanFill } from "react-icons/pi";

export default function Room() {
  return (
    <>
      <div className="container">
        <Navbar />

        <div className={styles.main}>
          <div className={styles.mains}>
            <RoomIcon />
            <div className={styles.Middle}>
              <div className={styles.MmarginAuto}>
                <div className={styles.chatbox}>
                  <div className={styles.roomname}>
                    <p>一首歌的故事</p>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.people}>
                      <IoAccessibilitySharp className={styles.icons} size={"30px"} color="blue" />
                      <p>15</p>
                    </div>
                    <div className={styles.lock}>
                      <FaKey className={styles.icons} size={"30px"} color="blue" />
                      <p>Y</p>
                    </div>
                    <div className={styles.author}>
                      <PiFinnTheHumanFill  className={styles.icons} size={"30px"} color="blue" />
                      <p>BEE</p>
                    </div>
                  </div>
                  
                  {/* 房間人數 房間加密 創辦作者 */}
                </div>

                {/* <div className={styles.chatbox}></div>
                <div className={styles.chatbox}></div>
                <div className={styles.chatbox}></div>
                <div className={styles.chatbox}></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        body {
          background-image: linear-gradient(
            to right bottom,
            #6bc3d1,
            #68c0d8,
            #68bdde,
            #6db9e3,
            #76b5e6,
            #65abec,
            #5aa0f1,
            #5894f4,
            #377ffa,
            #1c67fd,
            #214cfb,
            #3c22f4
          );
        }
      `}</style>
    </>
  );
}
