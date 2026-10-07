/*import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const JWT_SECRET = 'your_jwt_secret_here';

export default async function authMiddleware(req,res,next)
{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer '))
    {
        return res.status(401).json({
            success : false,
            message : "not authorized or token is missing"
        });
    }

    // it token is founded

    const token = authHeader.split(' ')[1];

    // now verify the token

    try{
       const payload = jwt.verify(token,JWT_SECRET);
       const user = await User.findById(payload.id).select('-password');

       if(!user)
       {
          return res.status(401).json({
             success : false,
             message : "User is not found"
          });
       }

       req.user = user;  // store the user in the request object for further use
       next();  // call the next middleware or route handler
    }

    catch(err)
    {
        console.error("Auth Middleware Error",err);
        return res.status(401).json({
            success : false,
            message : "Token is not valid"
        });
    }
}   */

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_here';

export default function authMiddleware(req, res, next) {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Not authorized" });
  }

  try {
    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = { id: decoded.id };

    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
}