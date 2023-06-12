import { prismaClient } from "../../../../infra/database/prismaClient";
import { UserOnSerie } from "../../entities/userOnSerie.entity";
import { IUserOnSerieRepository } from "../userOnSerie.repository";

export class UserOnSeriePrismaRepository implements IUserOnSerieRepository {
    save(userOnSerie: UserOnSerie): Promise<any> {
        const result = prismaClient.userOnSeries.create({
            data: {
                status: userOnSerie.status,
                serieId: userOnSerie.serieId,
                userId: userOnSerie.userId
            }
        });
        return result;
    }

}
