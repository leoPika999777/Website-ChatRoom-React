import { useState, useEffect, useContext, useRef } from 'react'
import styles from "@/styles/room.module.css";
import Navbar from "@/components/navbar";
import RoomIcon2 from "@/components/room2-roomicon";

import { ROOMS_LIST } from "@/configs";

import { IoAccessibilitySharp } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { FaLock } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";


export default function Room() {
  const [rooms, setRooms] = useState([]);

  const getTagsData = async () => {
    try {
      const response = await fetch(ROOMS_LIST);
      const data = await response.json();

      setRooms(data);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    getTagsData()
  }, []) // 在組件載入時執行

  return (
    <> 
      <div className="container">
        <Navbar />

        <div className={styles.main}>
          <div className={styles.mains}>
            <RoomIcon2 />
            <div className={styles.Middle}>
              <div className={styles.MmarginAuto}>
                {rooms &&
                  rooms.map((i) => {
                    return (
                      <div className={styles.chatbox} key={i.room_id}>
                      <div className={styles.lock}>
                            
                            <p>{i.room_password ? <FaLock  size={"20px"}
                              color="darkblue" /> : <FaUnlockAlt  size={"20px"}
                              color="lightblue" />}</p>
                          </div>
                        <div className={styles.roomname}>
                          <p>{i.room_name}</p>
                        </div>
                        <div className={styles.details}>
                          <div className={styles.people}>
                            <IoAccessibilitySharp
                              className={styles.icons}
                              size={"20px"}
                              color="blue"
                            />
                            <p>15</p>
                          </div>
                         
                          <div className={styles.author}>
                            <PiFinnTheHumanFill
                              className={styles.icons}
                              size={"20px"}
                              color="blue"
                            />
                            <p>{i.user_name}</p>
                          </div>
                        </div>

                        {/* 房間人數 房間加密 創辦作者 */}
                      </div>
                    );
                  })}
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
