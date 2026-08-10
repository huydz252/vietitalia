import jwt from "jsonwebtoken";

const verifyAdminToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Dạng 'Bearer <token>'

    if (!token) {
        return res.status(401).json({ success: false, message: 'Từ chối truy cập: Chưa đăng nhập!' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
        req.admin = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ success: false, message: 'Token hết hạn hoặc không hợp lệ!' });
    }
}

export { verifyAdminToken };
    