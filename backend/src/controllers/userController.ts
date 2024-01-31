import User from '../models/User'; // Adjust path
import { Request, Response } from 'express';

export const getUserDetails = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select('-password');
        if (!user) {
            res.status(404).send('User not found');
            return; // Just return without sending any object
        }
        res.json(user);
    } catch (error) {
        res.status(500).send('Error retrieving user details');
    }
};
