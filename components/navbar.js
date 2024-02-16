import React from 'react'
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  return (
    <>
        <div className={styles.header}>
          <div className={styles.hlogo}>
            <img
              src="/img/logo2.png"
              // alt="{v.name} "
            />
          </div>
          <div className={styles.hmiddle}>ChatRoom</div>
          <div className={styles.hright}>
            
            <div className={styles.huserphoto}>
              <img
                src="/img/user-01.png"
                // alt="{v.name} "
              />
            </div>
            <div className={styles.huser}>user</div>
          </div>
        </div>
    </>
  )
}
