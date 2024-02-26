import React, { createContext, useEffect, useState } from "react";


const AuthContext = createContext({});

export default AuthContext;

//登入狀態： 可登入 登出 狀態資料有哪些(會員ID, account, user_name , token)

//2-1. 登出狀態
export const initAuth = {
  user_id: 0,
  account: "",
  user_name: "",
  photo: "",
  token: "",
};

export const AuthContextProvider = ({ children }) => {
  //1.狀態資料有哪些？
  const [auth, setAuth] = useState({
    initAuth,
    //假資料
    // user_id: 15,
    // account: "shinder@test.com",
    // user_name: "大明",
    // token: "123",
  });

  useEffect(() => {
    const str = localStorage.getItem("auth");
    if (str) {
      try {
        //如果出錯 跳到這邊來
        const data = JSON.parse(str);
        if (data.user_id && data.account) {
          const { user_id, account, user_name, photo,token } = data;
          setAuth({ user_id, account, user_name, photo,token });
        }
      } catch (ex) {}
    }
  }, []);

  //2-2 登出
  const logout = () => {
    // 登出時, 清除 localStorage 的記錄
    localStorage.removeItem("auth");
    setAuth(initAuth);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
