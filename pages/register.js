import { useState, useContext } from "react";
import styles from "@/styles/register.module.css";
import Navbar from "@/components/navbar";
import RegisterRoomIcon from "@/components/register-roomicon";

export default function Index() {
  return (
    <>
      <div className="container">
        <Navbar />

        <div className={styles.main}>
          <div className={styles.mains}>
            <RegisterRoomIcon />
            <div className={styles.Middle}>
              <div className={styles.mleft}>
                <div className={styles.bigphoto}>
                  <img src="/img/user-01.png" />
                </div>
              </div>
              <div className={styles.mright}>
                <div className={styles.fields}>
                  <form className={styles.form}>
                    <label className={styles.lable}>
                      暱稱：
                      <input className={styles.input} type="text" name="name" />
                    </label>

                    <label className={styles.lable}>
                      帳號：
                      <input className={styles.input} type="text" name="name" />
                    </label>

                    <label className={styles.lable}>
                      密碼：
                      <input className={styles.input} type="text" name="name" />
                    </label>

                    <label className={styles.lable}>
                      確認密碼：
                      <input className={styles.input} type="text" name="name" />
                    </label>

                    <div className={styles.bottom}>
                      <input
                        className={styles.submit}
                        type="submit"
                        value="註冊"
                      />
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
