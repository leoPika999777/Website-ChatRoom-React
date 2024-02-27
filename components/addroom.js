import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/addroom.module.css";
import { ROOMS_ADD } from "@/configs";
import AuthContext from "@/contexts/AuthContext";
import ThemeContext, { themes } from "@/contexts/ThemeContext";
import Swal from "sweetalert2";
import { IoIosCloseCircle } from "react-icons/io";

export default function AddRoom({ onClose }) {
  const { auth } = useContext(AuthContext);
  console.log(auth.user_id);
  const [myForm, setMyForm] = useState({
    user_id: auth.user_id,
    room_name: "",
    room_password: "",
  });
  const router = useRouter();
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
    if (!myForm.room_name) {
      setNotext("fail");
      return;
    }
    //沒有讓表單送出
    e.preventDefault();

    //TODO: 檢查各欄位的資料

    //送出資料
    const r = await fetch(ROOMS_ADD, {
      method: "POST",
      body: JSON.stringify(myForm),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await r.json();
    if (responseData.success) {
      setDisplayInfo("succ");
      Swal.fire({
        position: "top",
        icon: "success",
        title: "成功創建房間",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        router.push(`/chat`);
      }, 1500);
    } else {
      setDisplayInfo("fail");
      // alert("新增發生錯誤!!!");
    }
  };
  useEffect(() => {
    setMyForm((prevState) => ({
      ...prevState,
      user_id: auth.user_id,
    }));
  }, [auth.user_id]);

  return (
    <>
      <div className={styles.body}>
      <div className={styles.close}>
          <IoIosCloseCircle color="white" cursor="pointer" onClick={onClose} />
        </div>
        <div className={styles.main}>
          {" "}
          <form className={styles.form} onSubmit={onSubmit}>
            <label className={styles.lable} htmlFor="room_name">
              <p>填寫房間名稱</p>
            </label>
            <input
              className={styles.input}
              type="text"
              id="room_name"
              name="room_name"
              value={myForm.room_name}
              onChange={changeHandler}
            />
            <div className="form-text"></div>

            {/* {notext === "fail" ? (
                      !myForm.room_name ? (
                        <div className={styles.notext} role="alert">
                          <p>欄位未填寫</p>
                        </div>
                      ) : null
                      
                    ) : null} */}
            {notext === "fail" ? (
              !myForm.room_name ? (
                <div className={styles.notext} role="alert">
                  <p className={styles.alert}>請填寫房間名稱</p>
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

            <label className={styles.lable} htmlFor="room_password">
              <p>房間密碼(選填)</p>{" "}
            </label>

            <input
              className={styles.input}
              type="room_password"
              id="room_password"
              name="room_password"
              value={myForm.room_password}
              onChange={changeHandler}
            />
            <div className="form-text"></div>

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
                創建房間
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
