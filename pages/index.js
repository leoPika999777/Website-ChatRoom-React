import { useState, useContext } from "react";
import styles from "@/styles/index.module.css";
import Navbar from "@/components/navbar";
import IndexRoomIcon from "@/components/index-roomicon";
import { LOGIN } from "@/configs";
import AuthContext from "@/contexts/AuthContext";
import { useRouter } from "next/router";

export default function Index() {
  const { auth } = useContext(AuthContext);

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const { setAuth } = useContext(AuthContext);
  const router = useRouter();

  const postForm = async (e) => {
    e.preventDefault();
    //表單不要用傳統的方式送出

    const r = await fetch(LOGIN, {
      method: "POST",
      //包成物件後轉成JSON
      body: JSON.stringify({ account, password }),

      //現在是JSON
      headers: {
        "Content-Type": "application/json",
      },
    });
    //拿到資料
    const data = await r.json();
    console.log(data);
    if (data.success) {
      const { user_id, account, user_name, photo, token } = data;
      //登入的時候寫進去
      localStorage.setItem(
        "auth",
        JSON.stringify({ user_id, account, user_name, photo, token })
      );
      setAuth({ user_id, account, user_name, photo, token });
      router.push("/");
    }
  };
  return (
    <>
      <div className="container">
        <Navbar />

        <div className={styles.main}>
          <div className={styles.mains}>
            <IndexRoomIcon />
            <div className={styles.Middle}>
              <div className={styles.mleft}>
                {auth.user_id ? (
                  <div className={styles.link}>
                    <p>Hello</p>
                    <a href="./room">LET's CHAT</a>
                  </div>
                ) : (
                  <div className={styles.hellos}>
                    <p>Hello</p>
                  </div>
                )}
              </div>
              <div className={styles.mright}>
                {auth.user_id ? (
                  <div className={styles.bigphoto}>
                    <img src="/img/user-01.png" />
                  </div>
                ) : (
                  <div className={styles.fields}>
                    <form className={styles.form} onSubmit={postForm}>
                      <label htmlFor="account">帳號</label>
                      <input
                        className={styles.input}
                        type="text"
                        name="account"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                      />

                      <br></br>
                      <label htmlFor="password" className="form-label">
                        密碼
                      </label>
                      <input
                        className={styles.input}
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <br></br>

                      <div className={styles.bottom}>
                        <button type="submit" className={styles.submit}>
                          登入
                        </button>
                      </div>
                    </form>
                    <div className={styles.form}>
                      <p>===or===</p>
                      <div className={styles.bottom}>
                        <a
                          href="./register"
                          className={styles.registbtn}
                          type="button"
                        >
                          註冊
                        </a>
                      </div>
                    </div>
                  </div>
                )}
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
