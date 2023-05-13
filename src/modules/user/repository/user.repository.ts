import { User } from "../entity/user.entity";

export interface IUserRepository {
  findByEmail(email:string): Promise<User | null>
  save(user: User): Promise<User>
}
