import { UserEntity } from "src/auth/models/user.entities";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity('coin-inventory')
export class CoinInventoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default : 0})
    gold: number;

    @Column({ default: 0})
    memoquartz: number;

    @OneToOne(() => UserEntity)
    @JoinColumn()
    user: UserEntity;

}