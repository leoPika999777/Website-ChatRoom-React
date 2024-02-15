import { useState, useContext } from "react";
import styles from "@/styles/index.module.css";

export default function Index() {
  return (
    <>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.hlogo}>
            <img
              src="/img/logo.png"
              // alt="{v.name} "
            />
          </div>
          <div className={styles.hmiddle}>ChatRoom</div>
          <div className={styles.hright}>
            <div className={styles.huser}>user</div>
            <div className={styles.huserphoto}>
              <img
                src="/img/user-01.png"
                // alt="{v.name} "
              />
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.mains}>
            <div className={styles.top}>
              <div className={styles.topA}>A</div>
              <div className={styles.topB}>B</div>
              <div className={styles.topC}>
                <img
                  src="/img/chat1.png"
                  // alt="{v.name} "
                />
              </div>
              <div className={styles.topD}>D</div>
              <div className={styles.topE}>E</div>
            </div>
            <div className={styles.Middle}>
              <div className={styles.mleft}>
                <div className={styles.bigphoto}>
                  <img src="/img/user-01.png" />
                </div>
              </div>
              <div className={styles.mright}>
                <div className={styles.fields}>
                  <form className={styles.form}>
                    <label>
                      帳號：
                      <input className={styles.input} type="text" name="name" />
                    </label>
                    <br></br>
                    <label>
                      密碼：
                      <input className={styles.input} type="text" name="name" />
                    </label>
                    <br></br>

                    <div className={styles.bottom}>
                      <input
                        className={styles.submit}
                        type="submit"
                        value="登入"
                      />
                      <button
                        type="submit"
                        className={styles.submit}
                        
                      >註冊</button>
                    </div>
                  </form>
                </div>
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
