//Controller (spring)

import express, { Response, Request } from "express";
import { GetAllUsersInteractor } from "../use_cases/get-all-users-interactor";
import { UserStorageGateway } from "./user.storage.gateway";

export class UserController {
    static async getAll(req: Request, res: Response){
        try {
            const repository = new UserStorageGateway();
            const interactor = new GetAllUsersInteractor(repository);
            const data = await interactor.execute();
            res.status(200).json({data})
        } catch (error) {
            console.log(error);
            res.status(400).json({message : 'Error'});
            
        }
    } 
}

export const userRouter = express.Router();
userRouter.get('/', [], UserController.getAll);