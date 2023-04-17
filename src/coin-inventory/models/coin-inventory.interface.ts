import { UserEntity } from "src/auth/models/user.entities";

export interface CoinInventoryModel {
    id?: number;
    gold?: number;
    memoquartz?: number;
    user? : UserEntity
}