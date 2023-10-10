import { UserCase } from "../../../kernel/contract";
import { TUser } from "../entities/user";
import { IUserRepository } from "./ports/user.repository";

//Service
export class GetAllUsersInteractor implements UserCase<void, TUser[]>{
    constructor(private readonly repository: IUserRepository){}
    async execute(payload?: void | undefined): Promise<TUser[]> {
        return await this.repository.findAll();
    }

}