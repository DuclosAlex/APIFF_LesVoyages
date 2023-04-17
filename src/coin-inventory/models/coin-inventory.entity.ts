import { UserEntity } from "src/auth/models/user.entities";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity('inventory')
export class CoinInventoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0})
    gridannia_power: number;

    @Column({ default: 0})
    ul_dah_power: number;

    @Column({ default: 0})
    limsaLominsa_power: number;

    @Column({ default : 0})
    gold: number;

    @OneToOne(() => UserEntity)
    @JoinColumn()
    user: UserEntity;

}