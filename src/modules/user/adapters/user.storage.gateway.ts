import { TUser } from "../entities/user";
import { IUserRepository } from "../use_cases/ports/user.repository";
import { pool } from "../../../config/postgres";

//Dao 
export class UserStorageGateway implements IUserRepository{
    async findAll(): Promise<TUser[]> {
        const query = 'SELECT id, username, created_at as "createdAt, last_signin as "lastSignIn",s.id as "statusId", s.description, r.id as "roleId", r.description as "role", p.name, p.surname,p.lastname FROM users ORDER BY id DESC';
        const {rows: userRows} = await pool.query(query);
        return userRows.map((user) => <TUser>user);
    }
    findById(id: number): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    save(user: TUser): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    update(user: TUser): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    delete(user: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}