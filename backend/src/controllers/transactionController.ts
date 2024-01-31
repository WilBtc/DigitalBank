import Transaction from '../models/Transaction'; // Adjust the path as per your project structure
import { Request, Response } from 'express';

export const createTransaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId, amount, type } = req.body;
        const newTransaction = new Transaction({ userId, amount, type });
        await newTransaction.save();
        res.status(201).send('Transaction created successfully');
    } catch (error) {
        res.status(500).send('Error creating transaction');
    }
};

export const getTransactionHistory = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.userId;
        const transactions = await Transaction.find({ userId });
        res.json(transactions);
    } catch (error) {
        res.status(500).send('Error retrieving transaction history');
    }
};
