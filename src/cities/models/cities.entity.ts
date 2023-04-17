import { UserEntity } from "src/auth/models/user.entities";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';


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
    user: UserEntity
}