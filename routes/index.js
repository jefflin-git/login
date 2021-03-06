// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入 home 模組程式碼
const home = require('./modules/home')
//引入loginCheck模組程式碼
const loginCheck = require('./modules/loginCheck')
//引入logout模組程式碼
const logout = require('./modules/logout')

// 將網址結構符合 / 字串的request導向home模組
router.use('/', home)
// 將網址結構符合 /login字串開頭的request導向login模組
router.use('/login', loginCheck)
// 將網址結構符合 /logout字串開頭的request導向logout模組
router.use('/logout', logout)

// 匯出路由器
module.exports = router