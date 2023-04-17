import { UserEntity } from "src/auth/models/user.entities";

export interface CoinInventoryModel {
    id?: number;
    gridannia_power?: number;
    ulDah_power?: number;
    limsaLominsa_power?: number;
    gold?: number;
    user? : UserEntity
}