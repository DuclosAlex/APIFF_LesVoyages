import  { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nickname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column( {default : false})
    is_admin: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}