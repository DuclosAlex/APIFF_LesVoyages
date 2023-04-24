import { UserEntity } from "src/auth/models/user.entities";
import { IdleCityCharacterEntity } from "src/idle-city-character/models/idle-city-character.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn} from 'typeorm';


@Entity('cities')
export class CityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default : false})
    isActived: boolean;

    @Column({ default: 0})
    cityPower: number;

    @ManyToOne(() => UserEntity, (user) => user.cities)
    user: UserEntity;

    @OneToMany(() => IdleCityCharacterEntity, (idleCityCharacters) => idleCityCharacters.city)
    idleCityCharacters: IdleCityCharacterEntity[]
}