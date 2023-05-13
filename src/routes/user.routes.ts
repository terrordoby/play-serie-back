import { Router } from "express";
import { createUserController } from "../modules/user/usecases/create-user";
import { authenticateUserController } from "../modules/user/usecases/authenticate-user";

const userRouter = Router();

userRouter.post("/users", async (request, response) => {
    await createUserController.handle(request, response);
});

userRouter.get("/login", async (request, response) => {
    await authenticateUserController.handle(request, response);
});

export {userRouter};
