export const PORT = 6005
export const DEV = true

// express 的位置
export const apiBaseUrl = 'http://localhost:3005/api'
export const avatarBaseUrl = 'http://localhost:3005/avatar'

// server
export const API_SERVER = 'http://localhost:3002'

// 會員註冊
export const MEMBER_SIGNUP = API_SERVER + '/member/signup'

// 會員註冊地址資料
export const MEMBER_ADDRESS_CITY = API_SERVER + '/member/signup/city/api'

// 會員詳細資料地址資料
export const MEMBER_ADDRESS_CITY_DISTRICT =
  API_SERVER + '/member/signup/city-district/api'

// 會員詳細資料
export const MEMBER_PROFILE = API_SERVER + '/member/profile/api'
export const MEMBER_PROFILE_PIC = API_SERVER + '/member/profile-img'


// BLOG-健身論壇總表
export const BLOG_LIST = API_SERVER + '/chat/api' // get

// BLOG-單一文章
export const BLOG_ONE = API_SERVER + '/chat/api/detail'

// BLOG-該文章留言
export const BLOG_REPLY = API_SERVER + '/chat/api/reply'

// BLOG-個人文章總表
export const BLOG_MYLIST = API_SERVER + '/chat/mypage'

// BLOG-個人收藏的文章總表
export const BLOG_MYLISTCOLLECT = API_SERVER + '/chat/mypagecollect'

// BLOG-個人文章總表個人頁
export const BLOG_MYONELIST = API_SERVER + '/chat/myonepage'

// BLOG- 個人文章編輯 得到原本內容
export const BLOG_GET_ONE = API_SERVER + '/chat/api/edit' // method: GET

//  BLOG-個人文章編輯 更新
export const BLOG_EDIT_ONE = API_SERVER + '/chat/edit' // method: PUT

//  BLOG-個人文章新增
export const BLOG_ADD = API_SERVER + '/blog-add/addblog'

//  BLOG-個人文章刪除
export const BLOG_DELETE = API_SERVER + '/chat/delete'

//  BLOG-文章留言新增
export const BLOGREPLY_ADD = API_SERVER + '/blog-add/addreply' 

//  BLOG-文章分類
export const BLOG_CLASS = API_SERVER + '/chat/myclass'

//  BLOG-加入收藏
export const BLOG_FAV_ADD = API_SERVER + '/chat/add-blog-fav' // post

//  BLOG-移除收藏
export const BLOG_FAV_REMOVE = API_SERVER + '/chat/delete-blog-fav' // delete

//  BLOG-收藏列表
export const BLOG_FAV = API_SERVER + '/chat/get-blog-fav' // get

//  BLOG-Follow-加入Follow-
export const FOLLOW_FAV_ADD = API_SERVER + '/chat/add-follow-fav' // post

//  BLOG-Follow-移除Follow-
export const FOLLOW_FAV_REMOVE = API_SERVER + '/chat/delete-follow-fav' // delete

//  BLOG-Follow-收藏Follow
export const FOLLOW_FAV = API_SERVER + '/chat/get-follow-fav' // get

//  BLOG-Follow-算多少FANS
export const BLOG_FANS = API_SERVER + '/chat/fans' // get

//  BLOG-Follow-算多少FANS
export const BLOG_FANSLIST = API_SERVER + '/chat/fanslist' // get



//會員註冊
export const USER_ADD = API_SERVER + '/reg/add'

//--------登入
export const LOGIN = API_SERVER + "/login-jwt"; // method: POST, 欄位 count, password

//--------會員相關的路由
export const PROFILE = API_SERVER + "/profile"; // method: GET, 取得用戶資料

// ROOMS-總表
export const ROOMS_LIST = API_SERVER + '/chat/rooms' // get

// ROOMS-房間新增
export const ROOMS_ADD = API_SERVER + '/chat/addroom'

// ROOMS-房間 找房主  找房間名稱
export const ROOMS_ONE = API_SERVER + '/chat/api/detail'

//  roommember-加入rb
export const RB_ADD = API_SERVER + '/chat/addrb' // post

//  roommember-移除rb
export const RB_REMOVE = API_SERVER + '/chat/deleterb' // delete

//  roommember-rb列表
export const RB_FAV = API_SERVER + '/chat/getrb' // get