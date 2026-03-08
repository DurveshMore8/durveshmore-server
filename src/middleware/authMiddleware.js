import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1];

            // Verify token
            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET || "fallback_secret_for_development_only"
            );

            // Add user payload to request
            req.user = decoded;
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ success: false, message: "Not authorized, token failed" });
        }
    }

    if (!token) {
        res.status(401).json({ success: false, message: "Not authorized, no token" });
    }
};
