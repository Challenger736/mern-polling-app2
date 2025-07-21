// // import jwt from "jsonwebtoken";
// // const JWT_SECRET = "mysecretkey";

// // export const authMiddleware = (req, res, next) => {
// //   const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
// //   if (!token) return res.status(401).json({ msg: "No token, unauthorized" });

// //   try {
// //     const decoded = jwt.verify(token, JWT_SECRET);
// //     req.user = decoded; // attach user info
// //     next();
// //   } catch (err) {
// //     return res.status(401).json({ msg: "Invalid token" });
// //   }
// // };
// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   const token = authHeader.split(" ")[1];
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET || "mysecretkey");
//     req.user = decoded; // Contains user ID and username
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };

// export default authMiddleware;
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "mysecretkey");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
