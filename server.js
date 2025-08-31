const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/quanlylamviec?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối với MongoDB thành công'))
  .catch(err => console.error('Lỗi kết nối MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Hệ Thống Quản Lý Làm Việc Từ Xa');
});

app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên cổng: ${PORT}`);
});