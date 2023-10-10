import { TUser } from "modules/user/entities/user";

export interface IUserRepository {
    findAll(): Promise <TUser[]>;
    findById(id: number): Promise<TUser>;
    save(user: TUser): Promise<TUser>;
    update(user: TUser): Promise<TUser>;
    delete(user: number): Promise<boolean>;
}