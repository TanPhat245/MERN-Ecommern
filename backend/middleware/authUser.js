import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1]; // Lấy token từ header Authorization
  
  if (!token) {
    return res.json({ success: false, message: "Bạn phải đăng nhập trước khi sử dụng" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; // Lưu thông tin người dùng vào req.userId
    next(); // Tiếp tục vào route
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "Token không hợp lệ" });
  }
};

export default authUser;
