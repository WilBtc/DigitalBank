import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User'; // Adjust 
import { Request, Response } from 'express';

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering new user');
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            res.status(401).send('Invalid credentials');
            return; // Just return without sending any object
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'default_secret_key', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).send('Error logging in user');
    }
};

