import { UserEntity } from "src/auth/models/user.entities";

export interface CityModel {

    id?: number;
    name?: string;
    isActivated?: boolean;
    user?: UserEntity;
}