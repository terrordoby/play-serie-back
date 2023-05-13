import { User } from "../../../modules/user/entity/user.entity";
import {} from 'crypto'
import { IToken } from "./token";
import {sign} from "jsonwebtoken";

class TokenJWT implements IToken {
    private JWTSECRET = process.env.JWT_SECRETKEY;
    private JWTSECRET_CRYPTYO =
    create({id, name, email}: User): string {
        sign();
    }

}
