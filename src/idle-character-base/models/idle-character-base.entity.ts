import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('idleCharacterBase')
export class IdleCharacterBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    portraitImage: string;

    @Column()
    cost: number;

    @Column()
    powerClick: number;

    @Column()
    createdAt: Date;

}