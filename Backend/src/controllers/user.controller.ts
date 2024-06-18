import * as userService from '../services/user.service';
import { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
    try {
        const result = await userService.signup(req.body);
        res.status(201).send(result);
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const result = await userService.login(req.body.email, req.body.password);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.findAllUsers();
        res.status(200).send(users);
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await userService.findUserById(req.params.id);
        if (!user) {
            return res.status(404).send({ success: false, message: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.deleteUserById(req.params.id);
        if (!result) {
            return res.status(404).send({ success: false, message: 'User not found' });
        }
        res.status(200).send({ success: true, message: 'User deleted successfully' });
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
};

export const updateUserById = async (req: Request, res: Response) => {
    try {
        const updatedUser = await userService.updateUserById(req.params.id, req.body);
        if (!updatedUser) {
            return res.status(404).send({ success: false, message: 'User not found' });
        }
        res.status(200).send({ success: true, message: 'User updated successfully', data: updatedUser });
    } catch (error: any) {
        res.status(500).send({ success: false, message: error.message });
    }
};
