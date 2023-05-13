import { prismaClient } from "../../../../infra/database/prismaClient";
import { User } from "../../entity/user.entity";
import { IUserRepository } from "../user.repository";

export class UserRepositoryPrisma implements IUserRepository {
    async findByEmail(email: string): Promise<User | null> {
        const user = await prismaClient.user.findUnique({
            where: {
                email
            }
        });
        return user;
    }
    async save(user: User): Promise<User> {
        const result = await prismaClient.user.create({
            data: {
                ...user
            }
        });

        return result;
    }

}
