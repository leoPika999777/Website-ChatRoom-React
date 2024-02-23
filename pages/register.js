import { useState, useContext } from "react";
import styles from "@/styles/register.module.css";
import Navbar from "@/components/navbar";
import RegisterRoomIcon from "@/components/register-roomicon";

import { USER_ADD } from "@/configs";

export default function Reg() {
  const [myForm, setMyForm] = useState({
    user_name: "",
    account: "",
    password: "",
    confirm: "",
    photo: 1,
  });

  // 表單送出通知
  const [displayInfo, setDisplayInfo] = useState("");
  // "", "succ", "fail"

  //資料未填寫
  const [notext, setNotext] = useState("");

  const changeHandler = (e) => {
    const { name, id, value } = e.target;
    console.log({ name, id, value });

    setDisplayInfo("");

    setMyForm({ ...myForm, [id]: value });
  };

  const onSubmit = async (e) => {
    if (
      !myForm.user_name ||
      !myForm.account ||
      !myForm.password ||
      !myForm.confirm
    ) {
      setNotext("fail");
      return;
    }
    //沒有讓表單送出
    e.preventDefault();

    //TODO: 檢查各欄位的資料

    // 嚴謹的檢查方式
    //const emailSchema = z.string().email({ message: "錯誤的 email 格式" });
    // coerce 寬鬆的檢查方式
    // const emailSchema = z.coerce
    //   .string()
    //   .email({ message: "錯誤的 email 格式" });
    // console.log("emailSchema:", emailSchema.safeParse(myForm.email));

    //送出資料
    const r = await fetch(USER_ADD, {
      method: "POST",
      body: JSON.stringify(myForm),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await r.json();
    if (responseData.success) {
      setDisplayInfo("succ");
      // alert("新增成功");
    } else {
      setDisplayInfo("fail");
      // alert("新增發生錯誤!!!");
    }
  };

  //判斷密碼是否一致
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordChange = (e) => {
    const { name, id, value } = e.target;
    console.log({ name, id, value });

    setDisplayInfo("");

    setMyForm({ ...myForm, [id]: value });
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    const { name, id, value } = e.target;
    console.log({ name, id, value });

    setDisplayInfo("");

    setMyForm({ ...myForm, [id]: value });
    setConfirmPassword(e.target.value);

    // 判断两个密码是否一致
    if (password === e.target.value) {
      setMessage('true');
    } else {
      setMessage('false');
    }
  };

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
                  <form className={styles.form} onSubmit={onSubmit}>
                    <label className={styles.lable} htmlFor="user_name">
                      暱稱：
                      <input
                        className={styles.input}
                        type="text"
                        id="user_name"
                        name="user_name"
                        value={myForm.user_name}
                        onChange={changeHandler}
                      />
                      <div className="form-text"></div>
                    </label>
                    {/* {notext === "fail" ? (
                      !myForm.user_name ? (
                        <div className={styles.notext} role="alert">
                          <p>欄位未填寫</p>
                        </div>
                      ) : null
                      
                    ) : null} */}
                    {notext === "fail" ? (
                      !myForm.user_name ? (
                        <div className={styles.notext} role="alert">
                          <p>名稱未填寫</p>
                        </div>
                      ) : (
                        <div className={styles.yestext} role="alert">
                          <p>&ensp;</p>
                        </div>
                      )
                    ) : (
                      <div className={styles.yestext} role="alert">
                        <p>&ensp;</p>
                      </div>
                    )}
                    <label className={styles.lable} htmlFor="account">
                      帳號：
                      <input
                        className={styles.input}
                        type="text"
                        id="account"
                        name="account"
                        value={myForm.account}
                        onChange={changeHandler}
                      />
                      <div className="form-text"></div>
                    </label>
                    {notext === "fail" ? (
                      !myForm.account ? (
                        <div className={styles.notext} role="alert">
                          <p>帳號未填寫</p>
                        </div>
                      ) : (
                        <div className={styles.yestext} role="alert">
                          <p>&ensp;</p>
                        </div>
                      )
                    ) : (
                      <div className={styles.yestext} role="alert">
                        <p>&ensp;</p>
                      </div>
                    )}

                    <label className={styles.lable} htmlFor="password">
                      密碼：
                      <input
                        className={styles.input}
                        type="password"
                        id="password"
                        name="password"
                        value={myForm.password}
                        onChange={handlePasswordChange}
                      />
                      <div className="form-text"></div>
                    </label>

                    {notext === "fail" ? (
                      !myForm.password ? (
                        <div className={styles.notext} role="alert">
                          <p>密碼未填寫</p>
                        </div>
                      ) : (
                        <div className={styles.yestext} role="alert">
                          <p>&ensp;</p>
                        </div>
                      )
                    ) : (
                      <div className={styles.yestext} role="alert">
                        <p>&ensp;</p>
                      </div>
                    )}

                    <label className={styles.lable}>
                      確認密碼：
                      <input
                        className={styles.input}
                        type="password"
                        id="confirm"
                        name="confirm"
                        value={myForm.confirm}
                        onChange={handleConfirmPasswordChange}
                      />
                      <div className="form-text"></div>
                    </label>
                    {notext === "fail" ? (
                      !myForm.confirm ? (
                        <div className={styles.notext} role="alert">
                          <p>欄位未填寫</p>
                        </div>
                      ) : (
                        <div className={styles.yestext} role="alert">
                          <p>&ensp;</p>
                        </div>
                      )
                    ) : (
                      <div className={styles.yestext} role="alert">
                        <p>  &ensp;	</p>
                      </div>
                    )}
                    

                    {!myForm.confirm ? <div className={styles.yestext} role="alert">
                        <p>  &ensp;	</p>
                      </div> :(message ? (
                      message === "true" ? (
                        <div className={styles.yestext} role="alert">
                        <p>  &ensp;	</p>
                      </div>
                      ) : (
                        <div className={styles.notext}  role="alert">
                        <p>密碼不一致</p>
                        </div>
                      )
                    ) : null)}

                    {/* 如果有值 displayInfo ?  ( 如果displayIndo成功 ? 資料新增成功 ： 新增失敗） ：null */}
                    {/* {displayInfo ? (
                      displayInfo === "succ" ? (
                        <div class="alert alert-success" role="alert">
                          資料新增成功
                        </div>
                      ) : (
                        <div class="alert alert-danger" role="alert">
                          新增發生錯誤!!!
                        </div>
                      )
                    ) : null} */}

                    <div className={styles.bottom}>
                      <button
                        className={styles.submit}
                        type="button"
                        onClick={onSubmit}
                        value=""
                      >
                        註冊
                      </button>
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
