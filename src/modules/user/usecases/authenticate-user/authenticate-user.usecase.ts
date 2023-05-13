import { IPasswordHash } from "../../../../infra/shared/passwordHash";
import { IUserRepository } from "../../repository/user.repository";

interface IAuthenticateUser {
  email: string
  password: string
}

export class AuthenticateUserUseCase {
    constructor(private userRepository: IUserRepository, private passwordHash: IPasswordHash){}

    async execute(data: IAuthenticateUser) {
        if (!data.email || !data.password) {
            throw new Error ("Email/password is required");
        }

        const user = await this.userRepository.findByEmail(data.email);

        if (user) {
            const isUser = await this.passwordHash.valite(data.password, user.password);
            if (isUser) {
                return user;
            } else {
                throw new Error ("Email/password is invalid");
            }
        }
    }
}
