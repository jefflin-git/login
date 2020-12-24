# 登入系統
採用 Node.js 和 Express 打造的登入系統，使用者可以在此頁面進行驗證

## 專案畫面
![登入系統](https://i.imgur.com/GFwaUiZ.png)
## 功能描述 (features)
- 在頁面中輸入Email和密碼進行驗證
- 若Emarl和密碼錯誤會跳出提示
- 若Emarl和密碼正確會進入welcome頁面

## 環境建置(prerequisites)
- Node.js v10.15.0
- Express v4.17.1
- Express-handlebars v5.2.0
- mongoose v5.11.8
- body-parser v1.19.0
- method-override v3.0.0

## 安裝與執行步驟 (installation and execution)
- 提醒: 以下動作需使用 terminal 或 Git Bash 指令
1. 將專案cline到本地環境
   ```
   git clone https://github.com/jefflin-git/restaurant_list.git
   ```
2. 進入專案資料夾
   ```
   cd login
   ```
3. 至 package.json 檔案裝查看需安裝的npm套件，並搭配以下指令安裝
   ```
   npm install
   ```
4. 安裝 nodemon 套件
   - 提醒: 若先前在本地開發環境中以`npm install -g nodemon` 指令安裝過可跳至下步驟
5. 匯入種子資料
    ```
    npm run seed
    ```
6. 啟動伺服器，執行 app.js 檔案
   - 使用 `nodemon app.js` 或 `npm run dev` 執行
   - 看到回應 `Express is listening on localhost:3000  at Time: (當地時間)` 代表成功執行
7. 開啟任一瀏覽器瀏覽器輸入 http://localhost:3000 開始使用

## 專案開發人員 (contributor)
> [Jeff Lin](https://github.com/jefflin-git)