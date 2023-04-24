import { CityEntity } from "src/cities/models/city.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity('idle-city-character')
export class IdleCityCharacterEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    goldProductivity: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    timeToProduceGold: number;

    @ManyToOne(() => CityEntity, (city) => city.idleCityCharacters)
    city: CityEntity;
}