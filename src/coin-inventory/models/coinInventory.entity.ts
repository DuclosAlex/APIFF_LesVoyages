import { UserEntity } from "src/auth/models/user.entities";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity('coin-inventory')
export class CoinInventoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0})
    travel_xp: number;

    @Column({ default : 0})
    gold: number;

    @OneToOne(() => UserEntity)
    @JoinColumn()
    user: UserEntity;

}