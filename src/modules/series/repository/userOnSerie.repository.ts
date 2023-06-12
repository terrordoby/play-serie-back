import { UserOnSerie } from "../entities/userOnSerie.entity";

export interface IUserOnSerieRepository {
  save(userOnSerie: UserOnSerie): Promise<UserOnSerie>
}
