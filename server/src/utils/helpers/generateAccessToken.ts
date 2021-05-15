import jwt from 'jsonwebtoken';

const generateAccessToken = (id: string, email: string) => {
    return jwt.sign(
        { id, email },
        process.env.JWT_SECRET_KEY || '',
        {
            expiresIn: process.env.JWT_MAX_AGE || '24h',
            algorithm: 'HS256'
        }
    );
};

export default generateAccessToken;