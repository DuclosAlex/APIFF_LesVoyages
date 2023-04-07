export interface UserModel {
    id?: number;
    nickname?: string;
    email?: string;
    password?: string;
    is_admin?: boolean
    createdAt?: Date;
    updatedAt?: Date;
}