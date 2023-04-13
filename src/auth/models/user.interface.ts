import { CoinInventoryEntity } from "src/coin-inventory/models/coinInventory.entity";
import { Role } from "./role.enum";

export interface CreateUser {
    nickname?: string;
    email?: string;
    password?: string;
    role? : Role;

}