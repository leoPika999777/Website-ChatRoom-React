import { useState, useEffect, useContext } from "react";
import styles from "@/styles/chat.module.css";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { ROOMS_ONE } from "@/configs";

import { useSocket } from "@/hooks/use-socket";

import AuthContext from "@/contexts/AuthContext";

export default function Chat() {
  const { auth } = useContext(AuthContext);

  const router = useRouter();
  const [room, setRoom] = useState({});

  let room_id = +router.query.sid || 1;

  const getRoom = async () => {
    // console.log('router.query:', router.query.sid) // 除錯用
    let room_id = +router.query.sid || 1;
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
  }, [router.query.sid]);

  //chat
  const { messages, sendMessage } = useSocket(auth.user_name);
  const [text, setText] = useState("");
  console.log(messages);

  const handleClick = () => {
    setText(""); // 清空输入框内容
    sendMessage(room_id, text);
  };

  //出現在頁面中
  const [auths, setAuth] = useState(null);
  useEffect(() => {
    if (auth) {
      // 显示用户信息
      document.querySelector(".username").style.display = "block";
    } else {
      // 隐藏用户信息
      document.querySelector(".username").style.display = "none";
    }
  }, [auth]);

  return (
    <>
      <div className="container">
        <Navbar />
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.lefttop}>
              <div className={styles.Name}>房主</div>
              <div className={styles.mainperson}>
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
            </div>
            <div className={styles.leftbtm}>
              <div className={styles.Name}>成員</div>
              <div className={styles.person}>
                <div className={styles.puserphoto}>
                  <img
                    src="/img/user-01.png"
                    // alt="{v.name} "
                  />
                </div>
                <div className={styles.pusername}>
                  <p className="username">{auth ? auth.user_name : ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.chatcontent}>
              {messages.map((message, index) => (
                <div key={index}>{message}</div>
              ))}
            </div>
            <div className={styles.textinput}>
              <input
                type="text"
                className={styles.input}
                id="memberID"
                name="memberID"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <button
                className={styles.submit}
                onClick={handleClick}
                //type="submit"
              >
                送出
              </button>
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
