import { UserEntity } from "src/auth/models/user.entities";

export interface CoinInventoryModel {
    id?: number;
    travel_xp?: number;
    gold?: number;
    user? : UserEntity
}