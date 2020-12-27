// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 載入model
const login = require('../../models/login.js')

const Fail = 'fail'
let status = ''

// 設定路由
router.post('/', (req, res) => {
    const keyword = req.body
    login.find()
        .lean()
        .then(users => {
            const validLogin = users.find(user => {
                return keyword.email === user.email && keyword.password === user.password
            })
            if (validLogin) {
                const userName = validLogin.firstName
                res.render('welcome', { userName })
                req.session.name = userName
            } else {
                status = Fail
                res.render('index', { keyword, status })
            }
        })
        .catch(err => console.log(err))
})

// 匯出路由器
module.exports = router