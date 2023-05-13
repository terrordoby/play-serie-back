import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./authenticate-user.usecase";
import { IUserRepository } from "../../repository/user.repository";
import { IPasswordHash } from "../../../../infra/shared/passwordHash";

export class AuthenticateUserController {
    constructor(private userRepository: IUserRepository, private passwordHash: IPasswordHash){}
    async handle(request: Request, response: Response){
        try {
            const authenticaseUseCase = new AuthenticateUserUseCase(this.userRepository, this.passwordHash);
            const result = await authenticaseUseCase.execute(request.body);
            return response.status(200).json(result);
        } catch (err: any) {
            return response.status(401).json(err.message);
        }

    }
}
