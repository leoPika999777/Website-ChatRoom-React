import { useState, useEffect, useContext } from "react";
import styles from "@/styles/chat.module.css";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { ROOMS_ONE, RB_FAV, RB_ADD, RB_REMOVE } from "@/configs";

import { useSocket } from "@/hooks/use-socket";

import AuthContext from "@/contexts/AuthContext";

export default function Chat() {
  const { auth } = useContext(AuthContext);

  const router = useRouter();
  const [room, setRoom] = useState({});
  const [roommembers, setRoommembers] = useState([]);

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

  // Find member
  const getRoommember = async () => {
    // console.log('router.query:', router.query.sid) // 除錯用
    let room_id = +router.query.sid || 1;
    if (room_id < 1) room_id = 1;

    try {
      const r = await fetch(RB_FAV + `/${room_id}`);
      const d = await r.json();
      //console.log({ d })
      setRoommembers(d);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    getRoommember();
  }, [router.query.sid]);

  // Execute RB_ADD event when user visits the site
  useEffect(() => {
    const addUserToRoom = async () => {
      try {
        // Check if user is already a member of the room
        const existingMembers = await fetch(RB_FAV + `/${room_id}`);
        const membersData = await existingMembers.json();
        const existingUser = membersData.find(
          (member) => member.user_id === auth.user_id
        );

        if (!existingUser) {
          // User is not a member, add the user to the room
          await fetch(RB_ADD, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              room_id: room_id,
              user_id: auth.user_id,
            }),
          });
        }
      } catch (error) {
        console.error("Error adding user to the room:", error);
      }
    };

    addUserToRoom();

    // Cleanup function to remove user from the room when leaving the page
    return () => {
      const removeUserFromRoom = async () => {
        try {
          await fetch(RB_REMOVE, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              room_id: room_id,
              user_id: auth.user_id,
            }),
          });
        } catch (error) {
          console.error("Error removing user from the room:", error);
        }
      };

      removeUserFromRoom();
    };
  }, [auth.user_id, room_id]);

  // Chat functionality
  const { messages, sendMessage } = useSocket(auth.user_name);
  const [text, setText] = useState("");
  console.log(messages);

  const handleClick = () => {
    setText(""); // 清空输入框内容
    sendMessage(room_id, text);
  };

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
                  <img src="/img/user-01.png" />
                </div>
                <div className={styles.pusername}>
                  <p>{room.user_name}</p>
                </div>
              </div>
            </div>
            <div className={styles.leftbtm}>
              <div className={styles.Name}>成員</div>
              {roommembers &&
                roommembers.map((i) => {
                  return (
                    <div className={styles.person} key={i.mid}>
                      <div className={styles.puserphoto}>
                        <img src="/img/user-01.png" />
                      </div>
                      <div className={styles.pusername}>
                        <p> {i.user_name}</p>
                      </div>
                    </div>
                  );
                })}
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
