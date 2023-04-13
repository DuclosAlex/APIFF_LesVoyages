import  { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import { Role } from './role.enum';
import { CoinInventoryEntity } from 'src/coin-inventory/models/coinInventory.entity';


@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique : true})
    nickname: string;

    @Column({ unique : true})
    email: string;

    @Column({ select: false})
    password: string;

    @Column({ type : 'enum', enum: Role, default: Role.USER})
    role: Role;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @OneToOne(()=> CoinInventoryEntity, (coinInventory) => coinInventory.user)
    coinInventory: CoinInventoryEntity;
}