import { useState, useEffect, useContext } from "react";
import styles from "@/styles/chat.module.css";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { ROOMS_ONE } from "@/configs";

import AuthContext from "@/contexts/AuthContext";

export default function Chat() {
  const { auth } = useContext(AuthContext);

  const router = useRouter();
  const [room, setRoom] = useState({});

  const getRoom = async () => {
    // console.log('router.query:', router.query.pid) // 除錯用
    let room_id = +router.query.pid || 1;
    if (room_id < 1) room_id = 1;

    try {
      const r = await fetch(ROOMS_ONE + `/${room_id}`);
      const d = await r.json();
      //console.log({ d })
      setRoom(d);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    getRoom();
  }, [router.query.pid]);

  return (
    <>
      <div className="container">
        <Navbar />
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.Name}>房主</div>
            <div className={styles.person}>
              <div className={styles.puserphoto}>
                <img
                  src="/img/user-01.png"
                  // alt="{v.name} "
                />
              </div>
              <div className={styles.pusername}>
                <p>{room.user_name}</p>
              </div>
            </div>
            <div className={styles.Name}>成員</div>
            <div className={styles.person}>
              <div className={styles.puserphoto}>
                <img
                  src="/img/user-01.png"
                  // alt="{v.name} "
                />
              </div>
              <div className={styles.pusername}>
                <p>BEE</p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.chatcontent}>content</div>
            <div className={styles.textinput}>
              <input className={styles.input} type="text" name="text" />

              <input className={styles.submit} type="submit" value="送出" />
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
