# README Template

![專案封面圖](https://user-images.githubusercontent.com/26405746/212472519-b783ef32-7e62-4f6c-861b-6a18700597be.png)

- [線上觀看連結](https://jaosn60810.github.io/bootstrap5-pet/#/)

## 畫面

![範例圖片 1](https://user-images.githubusercontent.com/26405746/212472705-1a99964e-97ec-4303-8282-b8d22c397754.png)
![範例圖片 2](https://user-images.githubusercontent.com/26405746/212472719-be492789-0f7a-49d6-9b9d-87bc7afaf3ed.png)
![範例圖片 3](https://user-images.githubusercontent.com/26405746/212472731-ca2397d5-14c4-4db8-8779-b47261846925.png)

## 安裝

> 請務必依據你的專案來調整內容。

以下將會引導你如何安裝此專案到你的電腦上。

### 取得專案

```bash
git clone https://github.com/jaosn60810/bootstrap5-pet.git
```

### 移動到專案內

```bash
cd bootstrap5-pet
```

### 安裝套件

```bash
npm install
```

### 環境變數設定

請在終端機輸入 `cp .env.example .env` 來複製 .env.example 檔案，並依據 `.env` 內容調整相關欄位。

### 運行專案

```bash
npm run dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:3000/
```

## 資料夾說明

- views - 畫面放置處
- router - 路由放置處
- components - 元件放置處
- assets - 靜態資源放置處
  - helpers - 客製化 scss 檔案放置處
  - img - 圖片放置處

## 專案技術

- Vue v3.2.25
- Vite v2.9.9
- Vue Router v4.0.13
- Bootstrap v5.1.3
