const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbName = 'quanlylamviec';
const mongoURI = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối với MongoDB thành công'))
  .catch(err => {
    console.error('Lỗi kết nối MongoDB:', err);
    process.exit(1);
});

app.get('/', (req, res) => {
  res.send('Chào mừng bạn đến với Hệ Thống Quản Lý Làm Việc Từ Xa');
});

app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên cổng: ${PORT}`);
});