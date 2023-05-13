import { Bcrypt } from "../../../../infra/shared/bcrypt.hash";
import { UserRepositoryPrisma } from "../../repository/implements/user.repositoryPrisma";
import { AuthenticateUserController } from "./authenticate-user.controller";

const userRepositoryPrism = new UserRepositoryPrisma();
const passwordHash = new Bcrypt();
const authenticateUserController = new AuthenticateUserController(userRepositoryPrism, passwordHash);
export {authenticateUserController};
