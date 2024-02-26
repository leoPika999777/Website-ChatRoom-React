import { useState, useContext } from "react";
import styles from "@/styles/navbar.module.css";
import AuthContext from "@/contexts/AuthContext";
import ThemeContext, { themes } from "@/contexts/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { auth, logout } = useContext(AuthContext);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.hleft}>
          <div className={styles.hlogo}>
            <img
              src="/img/logo2.png"
              // alt="{v.name} "
            />
          </div>
        </div>

        <div className={styles.hmiddle}>ChatRoom</div>

        {auth.user_id ? (
          <div className={styles.hright}>
            <div className={styles.huserphoto}>
              <img
                src="/img/user-01.png"
                // alt="{v.name} "
              />
            </div>
            <div >
              <a
                className={styles.logout}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
              >
                登出
              </a>
            </div>
          </div>
        ) : (
          <div className={styles.hright}>
            <div className={styles.huserphoto}>
              <img
                src="/img/user-07.png"
                // alt="{v.name} "
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
