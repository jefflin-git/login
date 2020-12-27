// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 設定路由
router.get('/', (req, res) => {
    const userName = req.session.name
    if (userName) {
        return res.render('welcome', { userName })
    }
    res.render('index')
})

// 匯出路由器
module.exports = router